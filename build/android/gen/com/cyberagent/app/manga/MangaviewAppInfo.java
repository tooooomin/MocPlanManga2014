package com.cyberagent.app.manga;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class MangaviewAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public MangaviewAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setString("acs-api-key-production", "P0RzIrEpYaFbeIt9kPcsce39W2bD7k8G");
					appProperties.setString("acs-api-key-production", "P0RzIrEpYaFbeIt9kPcsce39W2bD7k8G");
					
					properties.setString("acs-api-key-development", "RsQZIBQpGyGIbBAx9d7R6UgeVVTiKLAg");
					appProperties.setString("acs-api-key-development", "RsQZIBQpGyGIbBAx9d7R6UgeVVTiKLAg");
					
					properties.setString("acs-oauth-secret-development", "ODPuqZ2uTyHDwroSHcdDDH4xBuBxXXCg");
					appProperties.setString("acs-oauth-secret-development", "ODPuqZ2uTyHDwroSHcdDDH4xBuBxXXCg");
					
					properties.setString("ti.deploytype", "test");
					appProperties.setString("ti.deploytype", "test");
					
					properties.setString("ti.ui.defaultunit", "system");
					appProperties.setString("ti.ui.defaultunit", "system");
					
					properties.setString("acs-oauth-secret-production", "xZlCmQZqTFDjRK4RIWPRSfCeLDX2p86T");
					appProperties.setString("acs-oauth-secret-production", "xZlCmQZqTFDjRK4RIWPRSfCeLDX2p86T");
					
					properties.setString("acs-oauth-key-development", "hX3jdyXvBlG7SAWBpD15VrEr6kkJq80X");
					appProperties.setString("acs-oauth-key-development", "hX3jdyXvBlG7SAWBpD15VrEr6kkJq80X");
					
					properties.setString("acs-oauth-key-production", "AIImEn5iNpM0h7hPtv6mcYTNM2ysthwq");
					appProperties.setString("acs-oauth-key-production", "AIImEn5iNpM0h7hPtv6mcYTNM2ysthwq");
	}
	
	public String getId() {
		return "com.cyberagent.app.manga";
	}
	
	public String getName() {
		return "MangaView";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "fviAtt";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2013 by fviAtt";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.PNG";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "5dabcb2f-8858-48d6-9e2d-f1394fd62ba7";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
