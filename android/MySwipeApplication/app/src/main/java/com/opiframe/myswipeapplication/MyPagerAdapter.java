package com.opiframe.myswipeapplication;


import android.media.Image;
import android.os.Bundle;

import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentPagerAdapter;

public class MyPagerAdapter extends FragmentPagerAdapter {


    public MyPagerAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int position) {
        if(position == 2) {
            Fragment image = new ImageFragment();
            return image;
        } else {
            Fragment temp = new MyFragment();
            int pos = position + 1;
            Bundle data = new Bundle();
            data.putInt("currentpage", pos);
            temp.setArguments(data);
            return temp;
        }
    }

    @Override
    public int getCount() {
        return 5;
    }

    public CharSequence getPageTitle(int pos) {
        return "Page "+(pos+1);
    }
}
