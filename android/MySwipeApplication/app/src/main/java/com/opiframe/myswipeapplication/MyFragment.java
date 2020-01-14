package com.opiframe.myswipeapplication;


import android.os.Bundle;

import androidx.fragment.app.Fragment;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;


/**
 * A simple {@link Fragment} subclass.
 */
public class MyFragment extends Fragment {
    private int currentPage;
    private TextView pageMessage;

    public MyFragment() {
        // Required empty public constructor
    }

    @Override
    public void onCreate(Bundle instance) {
        super.onCreate(instance);
        Bundle data = getArguments();
        currentPage = data.getInt("currentpage",0);
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        // Inflate the layout for this fragment
        View v = inflater.inflate(R.layout.fragment_my, container, false);
        pageMessage = v.findViewById(R.id.pagetext);
        pageMessage.setText("Page "+currentPage);
        return v;
    }

}
