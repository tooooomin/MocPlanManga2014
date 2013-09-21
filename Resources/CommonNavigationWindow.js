/*
 * created by fvi@
 * 
 * created @ 201303010936
 * 
 * 
 * 
 * 
 */

exports.createCommonNavigationWindow = function(){
	var uiconfig = require('/uiconfig');
	height = Ti.Platform.displayCaps.platformHeight, width = Ti.Platform.displayCaps.platformWidth;
	
	
	var base_window = Titanium.UI.createWindow({
		//backgroundImage : background_path,
		backgroundColor : 'rgb(51,73,96)',
		exitOnClose : true,
		fullscreen : true,
		navBarHidden : true, //タイトルバーを隠す
		orientationModes : [Titanium.UI.PORTRAIT],
		win_touch_p:{x:0,y:0}
	});
	/*
	 * 今はサイズを固定しているが今後は端末の画面サイズに適応できるようにすること
	 * TODO
	 * 
	 * 
	 * 
	 */
	var user_photo_web_view = Titanium.UI.createWebView({
		height:height *0.5,
		width:width *0.65,
		enableZoomControls:false,
		backgroundColor:'rgb(51,73,96)',
		touchEnabled:false,
		horizontalWrap:true,
		url:'/user_image.html',
		
		center:{x:width *0.35,y:height *0.27},
	});
	
	user_photo_web_view.addEventListener('click',function(event){
		alert('stub user_image_click');
	});
	
	base_window.add(user_photo_web_view);

/*	
	var edit_option_button = Ti.UI.createButton({
		title:'鉛筆',
		center:{x:width *0.1,y:height *0.05},
		width:width *0.15,
		height:height *0.07,
	});
	
	edit_option_button.addEventListener('click',function(event){
		alert('編集画面に行く');
	});
	base_window.add(edit_option_button);
*/
	
	var option_username_label = Ti.UI.createLabel({
			text:'ユーザー名:test',
			width:width *0.5,
			height:height *0.2,
			center:{x:0.4*width,y:height *0.4},
			font : {
				fontSize : 28
			}
		});
		
	base_window.add(option_username_label);
	
	var option_tags = Array(uiconfig.COUNT_OPTION);

	/*
	 * for文の場合値のスコープが変になるので再帰で書いておきました
	 * 
	 */
	
// CENTER_WIDTH, CENTER_HEIGHT, 
	function createOptionTags(cnt){
		if(cnt >= uiconfig.COUNT_OPTION)
			return;
		var tag = Ti.UI.createLabel({
			//text:'オプション'+cnt,
			width:width *0.5,
			height:uiconfig.OPT_VIEW_TAG_HEIGHT,
			center:{x:0.3*width,y:height *0.5 + cnt *uiconfig.OPT_VIEW_TAG_HEIGHT},
			font : {
				fontSize : uiconfig.OPT_VIEW_FONTSIZE
			}
		});
		tag.addEventListener('click',function(e){
			alert('pushed option'+cnt);
			Titanium.App.fireEvent('option'+cnt);
		
		});
		base_window.add(tag);
		option_tags[cnt] = tag;
		
		createOptionTags(cnt +1);
		
		option_tags[0].setText("Likes");
		option_tags[1].setText("messages");
		option_tags[2].setText("Following");
		option_tags[3].setText("Follower");
		option_tags[4].setText("Config");
	}
/*
	function createOptionTags(cnt){
		if(cnt >= uiconfig.COUNT_OPTION)
			return;
			
		seitch(cnt){
			case 0:
				var title = "Likes";
				break;
			case 1:
				var title = "message";
				break;
			case 2:
				var title = "Following";
				break;
			case 3:
				var title = "Follower";
				break;
			case 4:
				var title = "Configur"
			
		var tag = Ti.UI.createLabel({
			text:'オプション'+cnt,
			width:width *0.5,
			height:height *0.2,
			center:{x:0.3*width,y:height *0.5 + cnt *uiconfig.OPT_VIEW_TAG_HEIGHT},
			font : {
				fontSize : uiconfig.OPT_VIEW_FONTSIZE
			}
		});
		tag.addEventListener('click',function(e){
			alert('pushed option'+cnt);
			Titanium.App.fireEvent('option'+cnt);
		
		});
		base_window.add(tag);
		option_tags[cnt] = tag;
*/
	
	createOptionTags(0);

	
	
	var base_view = Titanium.UI.createView({
		backgroundColor : 'rgb(255,235,205)',
		width:Ti.UI.FILL,
		height:Ti.UI.FILL,
		center:{x:width *0.5,y:height *0.5},
	});
	
	base_window.add(base_view);
	

	
	var main_scroll_base_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:2000,
		backgroundColor:'rgb(255,235,205)',
	});
	
	var scroll_view  = Ti.UI.createScrollView({
  		contentWidth: 'auto',
  		contentHeight: 'auto',
  		showVerticalScrollIndicator: false,
  		showHorizontalScrollIndicator: false,
  		height: '80%',
  		width: Ti.UI.FILL,
  		top:height *0.07,
	});
	
	scroll_view.add(main_scroll_base_view);
	base_view.add(scroll_view);
		
/*	
	var theme_buttons_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:height *0.15,
		backgroundColor:'gray',
		top:0,
	});
	
	main_scroll_base_view.add(theme_buttons_view);
*/
	
	var main_web_view = Titanium.UI.createWebView({
		height:2000,
		width:Ti.UI.FILL,
		enableZoomControls:true,
		backgroundColor:'rgb(255,235,205)',
		touchEnabled:true,
		horizontalWrap:true,
		url:'/HTML/4cora_top.html',
		
		//top:height *0.15,
		top: 0
	});
	
	main_scroll_base_view.add(main_web_view);
	
	var theme_buttons = new Array(4);
/*
	function createThemeButtons(cnt){
		if(cnt >= 4)
			return;
			
		var theme_btn = Ti.UI.createButton({
			title:'テーマ'+cnt,
			width:width *0.2,
			height:theme_buttons_view.height * 0.8,
			top:theme_buttons_view.height *0.21,
			left:(0.05 +(cnt *0.23))*width,
		});
		
		theme_buttons[cnt] = theme_btn;
		theme_buttons_view.add(theme_btn);
		
		createThemeButtons(cnt +1);
		
	}
*/
/*
	function createThemeButtons(cnt){
		if(cnt >= 4)
			return;
		
		var theme_btn = Ti.UI.createButton({
			width:width *0.2,
			height:theme_buttons_view.height * 0.8,
			top:theme_buttons_view.height *0.21,
			left:(0.05 +(cnt *0.23))*width,
		});
		
		theme_buttons[cnt] = theme_btn;
		theme_buttons_view.add(theme_btn);
		
		createThemeButtons(cnt +1);
		
		theme_buttons[0].setTitle("新着");
		theme_buttons[1].setTitle("人気");
		theme_buttons[2].setTitle("コメント");
		theme_buttons[3].setTitle("未完成");
	}

	
	createThemeButtons(0);
*/
	
	var underRibbon = Titanium.UI.createImageView({
			image:'/images/underRibbon/underRibbon2.png',
			width:Titanium.UI.FILL,
			height:height *0.2,
			top:uiconfig.COMMON_DOWN_BAR_TOP_AT,
	});
	
		base_view.add(underRibbon);
		
	var upperRibbon = Titanium.UI.createImageView({
			image:uiconfig.COMMON_UP_BAR_IMAGE_PATH,
			width:width,
			height:height *0.12,
			top:uiconfig.COMMON_UP_BAR_TOP_AT,
			bottom:uiconfig.COMMON_UP_BAR_BOTTOM_AT,
	});
	
		base_view.add(upperRibbon);
		
	var theme_buttons_view = Ti.UI.createView({
		width:Ti.UI.FILL,
		height:height *0.08,
		backgroundColor:'gray',
		top:uiconfig.COMMON_UP_BAR_TOP_AT + height*0.12,
	});
	
	base_view.add(theme_buttons_view);
	
	main_web_view.top = theme_buttons_view.height;
	
		function createThemeButtons(cnt){
		if(cnt >= 4)
			return;
		
		var theme_btn = Ti.UI.createButton({
			width:width *0.2,
			height:theme_buttons_view.height * 0.8,
			top:theme_buttons_view.height *0.21,
			left:(0.05 +(cnt *0.23))*width,
		});
		
		theme_buttons[cnt] = theme_btn;
		theme_buttons_view.add(theme_btn);
		
		createThemeButtons(cnt +1);
		
		theme_buttons[0].setTitle("新着");
		theme_buttons[1].setTitle("人気");
		theme_buttons[2].setTitle("コメント");
		theme_buttons[3].setTitle("未完成");
	}

	
	createThemeButtons(0);


		
	base_window.upperRibbon = upperRibbon;
	base_window.underRibbon = underRibbon;
	
	function moveOptionView(move){
		if(move == 'open'){
			base_view.animate({center:{x:width *1.2,y:height *0.5},duration:uiconfig.OPT_VIEW_MOVE_ANIMATION_OPEN_DURING});
		}
		if(move == 'close'){
			base_view.animate({center:{x:width * 0.5,y:height *0.5},duration:uiconfig.OPT_VIEW_MOVE_ANIMATION_CLOSE_DURING});
		}
	}
	
	
	var option_button = Ti.UI.createButton({
		title:'opt',
		center:{x:width *0.1,y:height * 0.05},
		width:width *0.15,
		height:height *0.07,
	});
	
	base_view.add(option_button);
	
	option_button.addEventListener('click',function(event){
		if(base_view.center.x == width *0.5){
			moveOptionView('open');
		}else{
			moveOptionView('close');
		}
	});
	
	var search_button = Ti.UI.createButton({
		title:'眼鏡',
		center:{x:width *0.9,y:height *0.05},
		width:width *0.15,
		height:height *0.07,
	});
	
	search_button.addEventListener('click',function(event){
		require('/SearchWin').openSearchWindow();
	});
	
	base_view.add(search_button);
	
	var title_label = Ti.UI.createLabel({
		text:'４コマちゃん',
		font : {
			fontSize : uiconfig.OPT_VIEW_FONTSIZE
		},
		width:width *0.5,
		height:height *0.1,
		textAlign:"center",
		center:{x:width *0.5,y:height *0.05}
	});
	
	base_view.add(title_label);
	

	/*
	 * スワップのスタートポイントを記録し、話した時の差分からスワップ処理を行うか否かの判断を行う
	 * 
	 */
	base_view.addEventListener('touchstart',function(event){
		base_window.win_touch_p.x = event.x;
		base_window.win_touch_p.y = event.y;
		
	});
	
	base_view.addEventListener('touchend',function(event){
		/*
		 * 左右のスワップにおける差分から水平スワップを検出する
		 */
		if(event.x - base_window.win_touch_p.x > width *0.6){
			//moveOptionView('open');
			//option_view.center = {x:width *0.45,y:height *0.5};	
		}
		
		if(base_window.win_touch_p.x - event.x > width *0.6){
			
			moveOptionView('close');
			//option_view.center = {x:width * -0.5,y:height *0.5};
		}
		
		/*
		 * 上下のスワップにおける差分から鉛直スワップを検出する
		 */
		if(event.y- base_window.win_touch_p.y > height *0.3){
			
			//theme_buttons_view.animate({top:0.07*height,duration:200});
		}
		
		if(base_window.win_touch_p.y - event.y > height *0.3){
			
			//theme_buttons_view.animate({top:-0.3*height,duration:200});
		}
		

		base_window.win_touch_p = {x:0,y:0};
		
		
	});
	
	var home_button = Ti.UI.createButton({
		title:'home',
		center:{x:width *0.2,y:height *0.95},
		width:uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT,
	});
	
	base_view.add(home_button);
	
	var list_button = Ti.UI.createButton({
		title:'作る',
		center:{x:width*0.5,y:height *0.95},
		width:uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT,
	});
	
	list_button.addEventListener("click",function(){
		require("/CreateNewMangaWindow").CreateNewMangaWindow().open();
	});
	
	base_view.add(list_button);
	
	var people_button = Ti.UI.createButton({
		title:'素材',
		center:{x:width*0.8,y:height *0.95},
		width:uiconfig.COMMON_UNDER_BOTTON_WIDTH,
		height:uiconfig.COMMON_UNDER_BOTTON_HEIGHT,
	});
	
	base_view.add(people_button);
	
	
	/*
	 * 
	 * ここからビューの中身を定義
	 */
	
	/*
	 * 画像ピッカーを表示するためのスニペット
	 * 
		var addImageButton= new require('/UsingMedia/imageFrame/MenuProjectFrame')();
		base_view.add(addImageButton);
	*/

	


	
	return base_window;
};
