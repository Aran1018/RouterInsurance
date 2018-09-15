package com.tts.aran.routerinsurance.utilsReact;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by Aran on 2018/7/17.
 * 那当自己都萎靡到
 * 无法被依靠的时候该如何振作？
 * <p>
 * 除过自己心中笃信的那一点不灭的光亮
 * 我觉得这世间再没有别的东西比它值得被如此依靠。
 */

public class RouterInsurancePackage implements ReactPackage {

    private RouterInsuranceModules mModule;

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();

    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {

        List<NativeModule> modules = new ArrayList<>();
        mModule = new RouterInsuranceModules(reactContext);
        modules.add(mModule);
        return modules;
    }

}
