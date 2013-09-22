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
 * Galaxy NEXUS の画面サイズ
 */
exports.ACTUAL_HEIGHT = 1280;
exports.ACTUAL_WIDTH = 720;

/*
 * 共通フレームの上のリボンイメージ
 */
//exports.COMMON_UP_BAR_IMAGE_PATH = '/images/underRibbon/underRibbon2.png';
exports.COMMON_UP_BAR_IMAGE_PATH = '/images/header/header_bg(720,100).png';

/*
 * ヘッダのリボンの高さ
 */
exports.HEADER_RIBBON_HEIGHT = height *(100/1280);

/*
 * Galaxy NEXUSのやつ
 */
//exports.HEADER_RIBBON_HEIGHT = 100;

/*
 * タイトルラベルの大きさ
 */
exports.TITLE_WIDTH = width *(175/720);
exports.TITLE_HEIGHT = height *(43/1280);
//exports.TITLE_WIDTH = 175;
//exports.TITLE_HEIGHT = 43;

/*
 * サーチボタンとオプションボタンの大きさ
 */
exports.SEARCH_BUTTON_WIDTH = width *(62/720);
exports.SEARCH_BUTTON_HEIGHT = height *(62/1280);
//exports.SEARCH_BUTTON_WIDTH = 62;
//exports.SEARCH_BUTTON_HEIGHT = 62;

exports.OPTION_BUTTON_WIDTH = width *(50/720);
exports.OPTION_BUTTON_HEIGHT = height *(42/1280);
//exports.OPTION_BUTTON_WIDTH = 50;
//exports.OPTION_BUTTON_HEIGHT = 42;

/*
 * テーマボタン（今はテーマじゃないけど）大きさ
 */
exports.THEME_BUTTON_WIDTH = width *(178/720);
exports.THEME_BUTTON_HEIGHT = height *(83/1280);
//exports.THEME_BUTTON_WIDTH = 178
//exports.THEME_BUTTON_HEIGHT = 83;


/*
 * 共通フレームの上のリボンのtopの位置を設定
 * 
 */
exports.COMMON_UP_BAR_TOP_AT = -0.03 * height;

/*
 * ヘッダの下のやつの大きさ
 */
exports.HEADER_UNDER_HEIGHT = height *(87/1280);

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
exports.COUNT_OPTION = 5;

/*
 * オプションの内部選択タグの高さ（height)に関する設定
 * 
 */
exports.OPT_VIEW_TAG_HEIGHT = height *0.1;

/*
 * 下のホームボタンなどのサイズに関する定義
 */

/*
 * ボタンのサイズ、機種に合わせるやつ
 */
exports.COMMON_UNDER_BOTTON_HEIGHT = height *(97/1280);
exports.COMMON_UNDER_BOTTON_WIDTH  = width *(239/720); 
/*
 * Galaxy NEXUSのやつ
 */
//exports.COMMON_UNDER_BOTTON_HEIGHT = 97;
//exports.COMMON_UNDER_BOTTON_WIDTH  = 239; 


/*
 * 画像ピッカーの画像パス
 */

exports.IMAGEPICK_DEFAULT_IMGPATH ='/images/icon/pallet_default.png';
exports.IMAGEPICK_DEFAULT_PRESSED_IMGPATH = '/images/icon/pallet_default_pressed.png';
