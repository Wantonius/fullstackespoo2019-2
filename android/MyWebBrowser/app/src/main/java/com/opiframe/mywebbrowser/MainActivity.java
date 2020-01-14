package com.opiframe.mywebbrowser;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    private WebView browser;
    private Button goButton;
    private EditText urledit;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        browser = findViewById(R.id.webview);
        goButton = findViewById(R.id.gobutton);
        urledit = findViewById(R.id.urledit);
        browser.setWebViewClient(new WebViewClient());
        browser.getSettings().setJavaScriptEnabled(true);
        browser.getSettings().setJavaScriptCanOpenWindowsAutomatically(true);
        goButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(urledit.getEditableText().toString().length() == 0) {
                    return;
                }
                String url = urledit.getEditableText().toString();
                if(!url.startsWith("http://")) {
                    url = "http://"+url;
                }
                browser.loadUrl(url);
            }
        });
    }
}
