//
//  LogManager.swift
//  actToLight
//
//  Created by Gustavo Emanuel Farias Rosa on 26/04/22.
//

import Foundation
import AVFoundation
import os
import UIKit

@available(iOS 14.0, *)
@objc(TorchManager)
class TorchManager: RCTEventEmitter {
  @objc 
  func on() {
    let device = AVCaptureDevice.default(for: AVMediaType.video)
    if(device!.hasTorch){
      do{
        try device?.lockForConfiguration()
        device?.torchMode = .on
        device?.unlockForConfiguration()
      } catch {
        
      }
    }
  }
  
  override init() {
    super.init()
    print("init")
  }
  
  @objc
  func batteryLevel(){
    let brightness = UIScreen.main.brightness
    sendEvent(withName: "battery", body: ["level": brightness])
  }
  
  @objc
  func off() {
    UIDevice.current.isBatteryMonitoringEnabled = true
    let bLevel = UIDevice.current.batteryLevel
    
    sendEvent(withName: "onReceived", body: ["count": bLevel])
    if #available(iOS 14.0, *) {
      let log = Logger.init(subsystem: "logs", category: "logs")
      log.error("sksksk")
    } else {
      // Fallback on earlier versions
    }
    let device = AVCaptureDevice.default(for: AVMediaType.video)
    if(device!.hasTorch){
      do{
        try device?.lockForConfiguration()
        device?.torchMode = .off
        device?.unlockForConfiguration()
      } catch {
        
      }
    } else {
      
    }
  }
  
  override func supportedEvents() -> [String]! {
      return ["onReceived"]
  }
  
  @objc
  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
  
}
