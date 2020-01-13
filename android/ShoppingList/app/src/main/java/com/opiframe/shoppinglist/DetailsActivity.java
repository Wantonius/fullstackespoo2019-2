package com.opiframe.shoppinglist;

import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class DetailsActivity extends AppCompatActivity {

    private static final String TAG = "DetailsActivity";
    private EditText typeedit,priceedit,countedit;
    private Button savebutton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.d(TAG,"onCreate");
        setContentView(R.layout.activity_details);
        typeedit = findViewById(R.id.typeedit);
        priceedit = findViewById(R.id.priceedit);
        countedit = findViewById(R.id.countedit);
        savebutton = findViewById(R.id.savebutton);
        setResult(Activity.RESULT_CANCELED);
        savebutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(typeedit.getEditableText().toString().length() == 0) {
                    return;
                }
                ShoppingItem item = new ShoppingItem();
                item.setType(typeedit.getEditableText().toString());
                try {
                    item.setPrice(Double.parseDouble(priceedit.getEditableText().toString()));
                    item.setCount(Integer.parseInt(countedit.getEditableText().toString()));
                } catch(NumberFormatException e) {
                    return;
                }
                Intent temp = new Intent();
                temp.putExtra("item",item);
                setResult(Activity.RESULT_OK,temp);
                finish();
            }
        });
    }
}
