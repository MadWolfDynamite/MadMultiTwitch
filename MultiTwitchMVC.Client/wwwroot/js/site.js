var activeStreams = -1;

function optimiseStreamEmbeds(streamCount, showChat) {
    if (streamCount === -1) {
        if (activeStreams === -1)
            return;

        streamCount = activeStreams
    }
    else {
        activeStreams = streamCount;
    }

    let wrapperHeight = window.innerHeight - ($('#settings-wrapper').height() + 10);
    let wrapperWidth = window.innerWidth - 10;

    $('#options-overlay').css({ 'width': wrapperWidth, 'height': wrapperHeight });

    if (showChat === 'True') {
        $('#chat-wrapper').css('display', 'block');

        let chatWidth = $('#chat-wrapper').width();
        wrapperWidth = wrapperWidth - (chatWidth + 75);

        let chatHeight = wrapperHeight - ($('.chat-tabs').height() + 10);
        $('.stream-chat').height(chatHeight);
    }
    else {
        $('#chat-wrapper').css('display', 'none');
    }

    $('#stream-wrapper').width(wrapperWidth);

    let embedHeight = 0;
    let embedWidth = 0;
    let wrapperPadding = 0;

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

            wrapperPadding = Math.floor((wrapperHeight - totalRows * maxHeight) / 2);
        }
    }

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
    let flag = $('#chat-wrapper').css('display') === 'block'
        ? 'False'
        : 'True';

    return flag;
}

function toggleOptionsPanel() {
    let visibility = $('#options-wrapper').css('display') === 'block'
        ? 'none'
        : 'block';

    $('#options-wrapper').css('display', visibility);
    $('#options-overlay').css('display', visibility);
}