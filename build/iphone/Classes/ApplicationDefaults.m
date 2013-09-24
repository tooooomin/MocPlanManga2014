/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2013 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 *
 * WARNING: This is generated code. Do not modify. Your changes *will* be lost.
 */

#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"

@implementation ApplicationDefaults

+ (NSMutableDictionary*) copyDefaults
{
	NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];
	
	[_property setObject:[TiUtils stringValue:@"ODPuqZ2uTyHDwroSHcdDDH4xBuBxXXCg"] forKey:@"acs-oauth-secret-development"];
	[_property setObject:[TiUtils stringValue:@"hX3jdyXvBlG7SAWBpD15VrEr6kkJq80X"] forKey:@"acs-oauth-key-development"];
	[_property setObject:[TiUtils stringValue:@"RsQZIBQpGyGIbBAx9d7R6UgeVVTiKLAg"] forKey:@"acs-api-key-development"];
	[_property setObject:[TiUtils stringValue:@"xZlCmQZqTFDjRK4RIWPRSfCeLDX2p86T"] forKey:@"acs-oauth-secret-production"];
	[_property setObject:[TiUtils stringValue:@"AIImEn5iNpM0h7hPtv6mcYTNM2ysthwq"] forKey:@"acs-oauth-key-production"];
	[_property setObject:[TiUtils stringValue:@"P0RzIrEpYaFbeIt9kPcsce39W2bD7k8G"] forKey:@"acs-api-key-production"];
	[_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];
	[_property setObject:[TiUtils stringValue:@"test"] forKey:@"ti.deploytype"];
	return _property;
}

+ (NSDictionary*) launchUrl {
    static BOOL launched = NO;
    if (!launched) {
        launched = YES;
        return nil;
    } else { return nil;}
}
 
@end