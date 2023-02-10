export default class Header {
    constructor(height, width, bgColor) {
        this.width = width;
        this.height = height;
        this.bgColor = bgColor;

        $('body').append('<div class="header"></div>');
        $('.header').css('width', this.width);
        $('.header').css('height', this.height);
        $('.header').css('background-color', this.bgColor);
    }

    setLogo(logo) {
        
    }

    setStyle(targetAttribute, targetValue) {
        $('.header').css(targetAttribute, targetValue);
    }
}