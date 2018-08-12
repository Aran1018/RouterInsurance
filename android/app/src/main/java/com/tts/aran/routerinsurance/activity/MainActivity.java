package com.tts.aran.routerinsurance.activity;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.View;
import android.widget.Button;
import android.widget.QuickContactBadge;

import com.tts.aran.routerinsurance.R;
import com.tts.aran.routerinsurance.activityReact.ReactActivity;

import java.io.File;

public class MainActivity extends Activity {

    private Button jump_to_rn;
    private Button native_camera;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        jump_to_rn = findViewById(R.id.jump_to_RN);
        jump_to_rn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity.this,ReactActivity.class);
                startActivity(intent);
            }
        });

        native_camera = findViewById(R.id.native_Camera);
        native_camera.setOnClickListener(new View.OnClickListener() {
            static final int REQUEST_IMAGE_CAPTURE = 1;
            @Override
            public void onClick(View view) {
                Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                if (takePictureIntent.resolveActivity(getPackageManager()) != null)
                {
                    startActivityForResult(takePictureIntent, REQUEST_IMAGE_CAPTURE);
                }
            }
        });
    }
}
