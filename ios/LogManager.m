//
//  LogManager.m
//  actToLight
//
//  Created by Gustavo Emanuel Farias Rosa on 26/04/22.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "React/RCTEventEmitter.h"

@interface RCT_EXTERN_MODULE(TorchManager, RCTEventEmitter)

RCT_EXTERN_METHOD(on)
RCT_EXTERN_METHOD(off)
RCT_EXTERN_METHOD(batteryLevel)
@end
