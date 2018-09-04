package com.tts.aran.routerinsurance.utilsReact;

import android.content.Context;
import android.content.Intent;
import android.provider.MediaStore;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by Aran on 2018/7/17.
 * 那当自己都萎靡到
 * 无法被依靠的时候该如何振作？
 * <p>
 * 除过自己心中笃信的那一点不灭的光亮
 * 我觉得这世间再没有别的东西比它值得被如此依靠。
 */
public class RouterInsuranceModules extends ReactContextBaseJavaModule {

    private Context mContext;


    public RouterInsuranceModules(ReactApplicationContext reactContext) {
        super(reactContext);
        mContext=reactContext;

    }

    @Override
    public String getName() {
        return "RouterInsuranceModules";
    }




    @ReactMethod
    public void TakeToast(){
        Toast.makeText(mContext, "eee", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void TakePhoto(){

    }
    @ReactMethod
    public void TheBack(){
        try {
            //虚拟返回按钮
            Runtime.getRuntime().exec("adb shell input keyevent 4");
        } catch (Exception e) {
            Log.e("runtime", "error");
        }
    }

}
