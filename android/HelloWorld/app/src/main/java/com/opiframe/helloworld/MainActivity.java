package com.opiframe.helloworld;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {

    private TextView hellotext;
    private Button hellobutton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        hellotext = findViewById(R.id.hellotext);
        hellobutton = findViewById(R.id.hellobutton);
        hellobutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                hellotext.setText("You pressed the button");
            }
        });
    }
}
