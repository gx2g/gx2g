;(function(){
	$.fn.backgroundScroll = function(options) {
		// オプション
		var opts = $.extend({}, $.fn.backgroundScroll.defaults, options);
		var img = opts.img;
		var $this = $(this);
		

		// 背景画像指定
		setImage();
		
		// スクロール
		scroll();


		// 背景画像指定
		function setImage(){
			var imgValue = '';
			for(var i = 1; i <= img.length; i++){
				var imgPath = 'url("' + img[i - 1] + '")';
				if(i != img.length){
					imgPath += ', ';
				}
				imgValue += imgPath;
			}
			$this.css('background-image', imgValue);
		}


		// スクロール
		function scroll(){
			// オプション・配列
			var speed = opts.speed;
			var directionX = opts.directionX;
			var directionY = opts.directionY;
			var imageWidth = opts.imageWidth;
			var imageHeight = opts.imageHeight;
			var speedLength  = speed.length;
			var posX = [];
			var posY = [];
			for(var i = 1; i <= img.length; i++){
				posX.push(0);
				posY.push(0);
			}

			// スクロール処理
			setInterval(function(){
				var positionValue = '';
				for(var i = 1; i <= speedLength; i++){
					var j = i - 1;

					if(Math.abs(posX[j]) >= imageWidth[j % imageWidth.length]){
						posX[j] = 0;
					}

					if(Math.abs(posY[j]) >= imageHeight[j % imageHeight.length]){
						posY[j] = 0;
					}

					if(directionX == 'right'){
						posX[j] += speed[j % speedLength];
					} else if (directionX == 'left') {
						posX[j] -= speed[j % speedLength];
					}

					if(directionY == 'bottom'){
						posY[j] += speed[j % speedLength];
					} else if (directionY == 'top') {
						posY[j] -= speed[j % speedLength];
					}

					var position = Math.floor(posX[j]) + 'px ' + Math.floor(posY[j]) + 'px';
					if(i != speedLength){
						position += ', ';
					}
					positionValue += position;
				}

				$this.css('background-position', positionValue);
			}, 1);
		}
	};
	$.fn.backgroundScroll.defaults = {
		directionX: 'right',
		directionY: 'bottom',
		speed: [0.8],
		click: 'stop',
	};
})(jQuery);