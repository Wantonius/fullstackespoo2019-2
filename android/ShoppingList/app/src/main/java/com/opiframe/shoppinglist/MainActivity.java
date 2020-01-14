package com.opiframe.shoppinglist;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.ListView;
import android.widget.TextView;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    private Button addbutton;
    private ListView lv;
    private ShoppingAdapter adapter;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        addbutton = findViewById(R.id.addbutton);

        lv = findViewById(R.id.lv);
        adapter = new ShoppingAdapter(this,0,0);
        lv.setAdapter(adapter);

        addbutton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent i = new Intent(MainActivity.this,DetailsActivity.class);
                startActivityForResult(i,100);
            }
        });

        lv.setOnItemLongClickListener(new AdapterView.OnItemLongClickListener() {
            @Override
            public boolean onItemLongClick(AdapterView<?> parent, View view, int position, long id) {
                final int pos = position;
                AlertDialog.Builder dialog = new AlertDialog.Builder(MainActivity.this);
                dialog.setPositiveButton("Confirm", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        adapter.remove(adapter.getItem(pos));
                        adapter.notifyDataSetChanged();
                    }
                });
                dialog.setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialog, int which) {
                        return;
                    }
                });
                dialog.setMessage("Are you sure you want to remove this?");
                dialog.show();
                return true;
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == 100) {
            if(resultCode == Activity.RESULT_OK) {
                ShoppingItem item = (ShoppingItem)data.getSerializableExtra("item");
                adapter.add(item);
                adapter.notifyDataSetChanged();
            }
        }
    }

    private class ShoppingAdapter extends ArrayAdapter<ShoppingItem> {

        public ShoppingAdapter(@NonNull Context context, int resource) {
            super(context, resource);
        }

        public ShoppingAdapter(@NonNull Context context, int resource, int textViewResourceId) {
            super(context, resource, textViewResourceId);
        }

        public ShoppingAdapter(@NonNull Context context, int resource, @NonNull ShoppingItem[] objects) {
            super(context, resource, objects);
        }

        public ShoppingAdapter(@NonNull Context context, int resource, int textViewResourceId, @NonNull ShoppingItem[] objects) {
            super(context, resource, textViewResourceId, objects);
        }

        public ShoppingAdapter(@NonNull Context context, int resource, @NonNull List<ShoppingItem> objects) {
            super(context, resource, objects);
        }

        public ShoppingAdapter(@NonNull Context context, int resource, int textViewResourceId, @NonNull List<ShoppingItem> objects) {
            super(context, resource, textViewResourceId, objects);
        }

        @NonNull
        @Override
        public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {
            if(convertView == null) {
                convertView = getLayoutInflater().inflate(R.layout.row_layout,null);
            }
            TextView typerow = convertView.findViewById(R.id.typerowtext);
            TextView pricerow = convertView.findViewById(R.id.pricerowtext);
            TextView countrow = convertView.findViewById(R.id.countrowtext);
            ShoppingItem item = adapter.getItem(position);
            typerow.setText(item.getType());
            countrow.setText(""+item.getCount());
            pricerow.setText(""+item.getPrice());
            return convertView;
        }
    }
}
