const root = $('html');
var activeStreams = -1;

function optimiseStreamEmbeds(streamCount, showChat) {
    // Check if the number of streams have been set
    if (streamCount === -1 && activeStreams === -1) { return; }
    else if (activeStreams === -1) { activeStreams = streamCount; }

    // Get overall size of the browser window (accommondate for padding) 
    let wrapperHeight = window.innerHeight - ($('#settings-wrapper').height() + 10);
    let wrapperWidth = window.innerWidth - 10;

    // Set the options overlay to cover stream and chat
    $('#options-overlay').css({ 'width': wrapperWidth, 'height': wrapperHeight });

    // Set the height of stream chat if required
    if (showChat) {
        $('#chat-wrapper').css('display', 'block');

        let chatWidth = $('#chat-wrapper').width();
        wrapperWidth = wrapperWidth - (chatWidth + 75);

        let chatHeight = wrapperHeight - ($('.chat-tabs').height() + 10);
        $('.stream-chat').height(chatHeight);
    }
    else {
        $('#chat-wrapper').css('display', 'none');
    }

    // Set the width of the wrapper containing stream embeds
    $('#stream-wrapper').width(wrapperWidth);

    let embedHeight = 0;
    let embedWidth = 0;
    let wrapperPadding = 0;

    // Calculate the largest possible width and height for stream embeds
    for (let row = 1; row <= activeStreams; row++) {
        let totalRows = Math.ceil(activeStreams / row);

        let maxWidth = Math.floor(wrapperWidth / row) - 5;
        let maxHeight = Math.floor(wrapperHeight / totalRows) - 5;

        let scaledWidth = maxWidth * 9 / 16;

        if (scaledWidth < maxHeight) {
            maxHeight = Math.floor(scaledWidth);
        }
        else {
            maxWidth = Math.floor((maxHeight) * 16 / 9)
        }

        if (maxWidth > embedWidth) {
            embedWidth = maxWidth;
            embedHeight = maxHeight;

            // Adjust the padding to vertically center the embedded streams
            wrapperPadding = Math.floor((wrapperHeight - totalRows * maxHeight) / 2);
        }
    }

    // Set stream embeds to calculated sides and add padding to wrapper
    $('.stream').css({ 'width': embedWidth, 'height': embedHeight });
    $('#stream-wrapper').css('padding-top', wrapperPadding);
}

$.fn.moveToAbsoluteCenter = function () {
    let posX = (window.innerWidth - this.width()) / 2;
    let posY = (window.innerHeight - this.height()) / 2;

    if (posX < 0) { posX = 0; }
    if (posY < 0) { posY = 0; }

    this.css({ 'position': 'absolute', 'left': posX, 'top': posY });
}

function toggleChatWindow() {
    return $('#chat-wrapper').css('display') !== 'block';
}

function toggleOptionsPanel() {
    let visibility = $('#options-wrapper').css('display') === 'block'
        ? 'none'
        : 'block';

    $('#options-wrapper').css('display', visibility);
    $('#options-overlay').css('display', visibility);
}

function togglePageTheme(theme) {
    switch (theme) {
        case 'dark':
            root.css('--main-background', 'var(--main-background-dark, #000)');
            root.css('--border-color', 'var(--border-color-dark, #232323)');
            root.css('--font-color', 'var(--font-color-dark, #fff)');
            root.css('--settings', 'var(--settings-dark, #000)');
            root.css('--stream-options', 'var(--stream-options-dark, #000)');
            root.css('--overlay', 'var(--overlay-dark, #000)');
            root.css('--chat-tabs', 'var(--chat-tabs-dark, #0F0F0F)');
            break;
        case 'light':
            root.css('--main-background', 'var(--main-background-light, #fff)');
            root.css('--border-color', 'var(--border-color-light, #DCDCDC)');
            root.css('--font-color', 'var(--font-color-light, #000)');
            root.css('--settings', 'var(--settings-light, #fff)');
            root.css('--stream-options', 'var(--stream-options-light, #fff)');
            root.css('--overlay', 'var(--overlay-light, #fff)');
            root.css('--chat-tabs', 'var(--chat-tabs-light, #F0F0F0)');
            break;
    }
}