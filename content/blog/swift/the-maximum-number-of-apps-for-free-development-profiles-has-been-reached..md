---
title: [Swift] The maximum number of apps for free development profiles has been reached.
date : 2020-06-09 14:09:86
category: swift
thumbnail: { thumbnailSrc }
draft: false
---



> Xcode 상에서 만든 앱을 physical device로 provisioning 하려고 하는데, Build는 되지만 디바이스에 install은 되지 않는 상황.
에러 메세지 : `The maximum number of apps for free development profiles has been reached.`  

<br/>

환경: iOS 13.5 / Xcode 11.5

<br/>

```bash
Details

Unable to install "I Am Rich"
Domain: com.apple.dt.MobileDeviceErrorDomain
Code: -402620383
--
The maximum number of apps for free development profiles has been reached.
Domain: com.apple.dt.MobileDeviceErrorDomain
Code: -402620383
User Info: {
    DVTRadarComponentKey = 487925;
    MobileDeviceErrorCode = "(0xE8008021)";
    "com.apple.dtdevicekit.stacktrace" = (
	0   DTDeviceKitBase                     0x000000011997681a DTDKCreateNSErrorFromAMDErrorCode + 233
	1   DTDeviceKitBase                     0x00000001199b7f70 __90-[DTDKMobileDeviceToken installApplicationBundleAtPath:withOptions:andError:withCallback:]_block_invoke + 155
	2   DVTFoundation                       0x0000000100958155 DVTInvokeWithStrongOwnership + 73
	3   DTDeviceKitBase                     0x00000001199b7ca8 -[DTDKMobileDeviceToken installApplicationBundleAtPath:withOptions:andError:withCallback:] + 1654
	4   IDEiOSSupportCore                   0x000000011982ee91 __118-[DVTiOSDevice(DVTiPhoneApplicationInstallation) processAppInstallSet:appUninstallSet:installOptions:completionBlock:]_block_invoke.352 + 4165
	5   DVTFoundation                       0x0000000100a8b7f4 __DVT_CALLING_CLIENT_BLOCK__ + 7
	6   DVTFoundation                       0x0000000100a8d436 __DVTDispatchAsync_block_invoke + 1194
	7   libdispatch.dylib                   0x00007fff71bb86c4 _dispatch_call_block_and_release + 12
	8   libdispatch.dylib                   0x00007fff71bb9658 _dispatch_client_callout + 8
	9   libdispatch.dylib                   0x00007fff71bbec44 _dispatch_lane_serial_drain + 597
	10  libdispatch.dylib                   0x00007fff71bbf5d6 _dispatch_lane_invoke + 363
	11  libdispatch.dylib                   0x00007fff71bc8c09 _dispatch_workloop_worker_thread + 596
	12  libsystem_pthread.dylib             0x00007fff71e13a3d _pthread_wqthread + 290
	13  libsystem_pthread.dylib             0x00007fff71e12b77 start_wqthread + 15
);
}
--

System Information

macOS Version 10.15.5 (Build 19F101)
Xcode 11.5 (16139)
```

<br/>

- 원인
    - apple에서는 무료 애플 아이디 사용자에게 1주일에 앱을 3개까지만 무료로 provisioning 할 수 있도록 하고 있음
    - 앱 도큐먼트만 클라우드 아이콘으로 남고 앱 자체는 삭제된(`offloaded`) 상황 (`사용하지 않는 앱 정리하기` 기능이 on 되어 있었음)
    - 위 케이스에 해당하는 앱들이 무료 provisioning에 해당하는 케이스로 잡힘
    - Provisioning Profile 자체가 없는데 무료 limit을 초과했다고 인지

<br/>

- 해결
    - `사용하지 않는 앱 정리하기` 기능을 off하고 해당 앱을 다운받으면 됨
    - 확인하기
        - 맥에서 `[console.app](http://console.app)`을 열고 왼쪽 Pane에서 iPhone 디바이스 선택
        - 이 상태로 Xcode에서 Run, install 시도
        - console 에서 `MIFreeProfileValidatedAppTracker` 검색

        ```bash
        0x16f1d3000 -[MIFreeProfileValidatedAppTracker _onQueue_addReferenceForApplicationIdentifier:bundle:error:]: 182: This device has reached the maximum number of installed apps using a free developer profile: {(
            "WTR8CZ75WP.com.finnq.f1",
            "W34ZWLP7R2.com.kvp.mobileisp",
            "MZF6QDH888.com.hanabank.oneqcert",
            "ZW4U99SQQ3.jp.naver.linecamera",
            "24V7JB28L6.com.studioxid.ProtoPie",
            "BUQ8UP3ZV9.com.homeplus.myhomeplus",
            "XR2PBHV9ZX.com.sundaytoz.kakao.wbb",
            "34LRP8AV2M.com.fujifilmdsc.app.CameraApp",
            "GZ9F4LUMDT.kr.co.withweb.HotelTime",
            "JJ2D372S4X.com.jellybus.Moldiv",
            "VQCH69RFN4.kr.co.aladin.eBookViewer",
            "Z227W3WREN.com.asiana.asianaapp",
            "EQHXZ8M8AV.com.google.chrome.ios",
            "Q349A9PTD8.kr.co.srail.app2",
            "com.apple.tips",
            "ZL6BUSYGB3.com.apple.stocks",
            "8X864N9A3N.com.turner.cnmatchland",
            "Q956A2A624.video.vue.visionary",
            "TRNR9S6P73.kr.co.mcdonalds.sadium.mobile",
            "QD23E3Q368.com.brandicorp.bradi",
            "J9SJ95EU47.com.titi<…>
        ```
        <br/>
        테스트로 가장 위에 위치한 finnq 앱을 삭제

        ```bash
        0x16efa3000 -[MIFreeProfileValidatedAppTracker _onQueue_addReferenceForApplicationIdentifier:bundle:error:]: 182: This device has reached the maximum number of installed apps using a free developer profile: {(
            "W34ZWLP7R2.com.kvp.mobileisp",
            "MZF6QDH888.com.hanabank.oneqcert",
            "ZW4U99SQQ3.jp.naver.linecamera",
            "24V7JB28L6.com.studioxid.ProtoPie",
            "BUQ8UP3ZV9.com.homeplus.myhomeplus",
            "XR2PBHV9ZX.com.sundaytoz.kakao.wbb",
            "34LRP8AV2M.com.fujifilmdsc.app.CameraApp",
            "GZ9F4LUMDT.kr.co.withweb.HotelTime",
            "JJ2D372S4X.com.jellybus.Moldiv",
            "VQCH69RFN4.kr.co.aladin.eBookViewer",
            "Z227W3WREN.com.asiana.asianaapp",
            "EQHXZ8M8AV.com.google.chrome.ios",
            "Q349A9PTD8.kr.co.srail.app2",
            "com.apple.tips",
            "ZL6BUSYGB3.com.apple.stocks",
            "8X864N9A3N.com.turner.cnmatchland",
            "Q956A2A624.video.vue.visionary",
            "TRNR9S6P73.kr.co.mcdonalds.sadium.mobile",
            "QD23E3Q368.com.brandicorp.bradi",
            "J9SJ95EU47.com.titicacacorp.triple",
            "FB8B96TA<…>
        ```

        line 2를 보면 finnq는 해결 된 모습을 볼 수 있음!
    
        <br/>

        - 기타 시도한 해결 방법들

            스택오버플로우, apple developer community 등 참고함

            - Xcode - Window - Devices and Simulators - Installed apps 제거
            - Xcode - Window - Devices and Simulators - Device 우클릭 - Show Provisioning Profiles - 모두 제거
            - Xcode - Window - Devices and Simulators - Device 우클릭 - Unpair Device - 다시 페어링
            - Restart Xcode
            - Xcode - Preferences - Accounts - 연결된 Apple ID 연결 해제 후 다시 연결
            - 새로운 Apple ID 연결 후 시도
            - Apple ID - 현재 사용하지 않는 디바이스 연결 해제


<br/>

---
<br/>

Reference

[The maximum number of apps for free development profiles has been reached. Xcode 11.5](https://stackoverflow.com/questions/61953293/the-maximum-number-of-apps-for-free-development-profiles-has-been-reached-xcode/61978102#61978102)