/*
 * created by fvi@
 * 
 * これはイメージのパスの配置を記述するための設定ファイルです
 * うｐ主は眠くて寝てしまいました。あとはやっておいて上げてください
 * 
 * パスはResources/　から記述するようにしてください
 */
height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;


/*
 * 共通フレームの上のリボンイメージ
 */
exports.COMMON_UP_BAR_IMAGE_PATH = '/images/underRibbon/underRibbon2.png';

/*
 * 共通フレームの上のリボンのtopの位置を設定
 * 
 */
exports.COMMON_UP_BAR_TOP_AT = -0.03 * height;
/*
 * 共通フレームの上のリボンがどれだけ下にせり出すか bottom:の設定
 * 
 */
exports.COMMON_UP_BAR_BOTTOM_AT = 0.15 * height;
/*
 * 共通ブレームの下のリボンがどれだけせり出すかtop:で設定
 * 
 */
exports.COMMON_DOWN_BAR_TOP_AT = height *0.88;

/*
 * オプションビューの遷移アニメーションの所要時間（ミリ秒)
 */
exports.OPT_VIEW_MOVE_ANIMATION_OPEN_DURING = 700;
exports.OPT_VIEW_MOVE_ANIMATION_CLOSE_DURING = 350;

/*
 * オプションビューの各要素のフォントサイズ
 * 
 */
exports.OPT_VIEW_FONTSIZE = 45;

/*
 * オプションの内部におけるタブの要素数
 */
exports.COUNT_OPTION = 2;

/*
 * 下のホームボタンなどのサイズに関する定義
 */
exports.COMMON_UNDER_BOTTON_HEIGHT = height *0.1;
exports.COMMON_UNDER_BOTTON_WIDTH  = width *0.15;


/*
 * 画像ピッカーの画像パス
 */

exports.IMAGEPICK_DEFAULT_IMGPATH ='/images/icon/pallet_default.png';
exports.IMAGEPICK_DEFAULT_PRESSED_IMGPATH = '/images/icon/pallet_default_pressed.png';

