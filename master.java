package com.yyuap.mkb.test;

//this is master java file 2018-08-04 10:07
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Map;

import org.apache.commons.httpclient.HttpException;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.yyuap.mkb.entity.KBINDEXTYPE;
import com.yyuap.mkb.nlp.BaiAdapter;

public class simnet {

    public static void test() {

        zaoju();
        if (1 == 1) {
            return;
        }

        // String q1 = "我想请假";
        String q1 = "我想请假一天，有点发烧，";
        ArrayList<String> yuliao = new ArrayList();
        yuliao.add("我的孩子病了");
        yuliao.add("我的孩子病了，我想请假两天");
        yuliao.add("我明天要去接我亲戚");
        yuliao.add("我明天要去接我亲戚，我想请假一天");
        yuliao.add("我明天要陪我妈去看病");
        yuliao.add("我明天要陪我妈去看病，想请假一天");

        yuliao.add("我发烧了");
        yuliao.add("我拉肚子了");
        yuliao.add("我摔了一脚");
        yuliao.add("我出车祸了");
        yuliao.add("我有点私事");
        yuliao.add("我哥哥来了，我要接待一下");

        yuliao.add("我拉肚子了，想请假一天");
        yuliao.add("我发烧了，想请假两天");
        yuliao.add("我发烧了，想请假");
        yuliao.add("我发烧了，想休息2天");
        yuliao.add("我有点发烧了，想请假");
        yuliao.add("我发烧了，想请假两天");
        yuliao.add("我想请假两天，发烧了");
        yuliao.add("我发烧了，想请假两天，请批准");
        yuliao.add("我发高烧了，想请假一天");
        yuliao.add("我发烧了，要去医院，想请假两天");
        yuliao.add("我发烧了，下不了床，想请假两天");
        yuliao.add("我发烧了，想请一下假");
        yuliao.add("我发烧了，估计没法上班，想请假两天");
        yuliao.add("我发烧了，没法去了，想请假两天");
        yuliao.add("我发烧了，估计明天没法上班了，想请假两天");

        float score = -1;
        ArrayList<JSONObject> result = new ArrayList<JSONObject>();

        try {
            for (String q2 : yuliao) {

                score = similar(q1, q2);
                JSONObject json = new JSONObject();
                json.put("q", q1);
                json.put("x", q2);
                json.put("score", score);
                json.put("d", "我发烧了");
                result.add(json);

            }
        } catch (HttpException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        print(result);

    }

   
