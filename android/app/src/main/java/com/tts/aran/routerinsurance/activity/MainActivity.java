package com.tts.aran.routerinsurance.activity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.tts.aran.routerinsurance.R;
import com.tts.aran.routerinsurance.activityReact.ReactActivity;

public class MainActivity extends Activity {

    private Button jump_to_rn;

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
    }
}
