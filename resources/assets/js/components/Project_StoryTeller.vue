<template lang="jade">
  .container.page_project.project_story
    .top
      br
      .input_area
        i.fa.fa-search
        input(v-model="filter")
        .float_right
          select
            option 覺味
            option 漫遊
            option 印象
            option 未來
          select(style="width: 120px")
            option CC BY 3.0
            option CC BY-NC-ND 3.0
          select
            option 0-5年
            option 6-10年
            option 11-15年
            option 16-20年
            option 20年以上

      .player_container

        .player(v-if="selected_video")
          h3 [{{'#'+selected_video.theme}}] {{selected_video.title}} 
          h5 {{selected_video.info}}
            span.tag(v-for="t in selected_video.tag.split(',')") {{t}}
          span( v-html="embed(selected_video.youtube)")
        .related
          ul
            li.related_item

              .video_box(v-for="(rv,id) in related_set(selected_video)" v-if="rv.youtube!=''" @click="sel_id=rv.id" ,:key="rv")
                
                .cover(:style="bg_css('https://img.youtube.com/vi/'+rv.youtube.split('/').slice(-1)+'/0.jpg')")
                  h5 {{rv.title}}
                  .hover_title {{rv.title}}

      br
      .video_box(v-for="(piece,id) in filtered_data" v-if="piece.youtube!=''" @click="sel_id=piece.id"  ,:key="piece")
        .cover(:style="bg_css('https://img.youtube.com/vi/'+piece.youtube.split('/').slice(-1)+'/0.jpg')")
          .tag_in_cover {{piece.theme}}
          .hover_title {{piece.title}}
    .bottom
      .left
        h1 時光@臺中
        h4 作者
        h5 記錄一群說故事的人
      .right
        img.cover(src="/img/page_storytell.png")
        p
          「人心真是一座超級的 虛擬雲端資料庫」<br>
        p ——路寒袖（在城市的年輪散步/瑞成書局）<br>
        p 時光＠臺中，主要的內容是記錄一群說故事的人，他或她生活在臺中的經驗。說故事，原本就是高度個人化的表達，二十五位講故事者就是二十五位藝術家，面對鏡頭把自己眼見，或曾經聽聞的感受與記憶，直接記錄下來。這些美好的記憶與經驗，重新喚起情感，擴大我們對於臺中「感知」的能力。同時，驗證了不分年齡，每個世代對臺中都有非常獨一無二的觀察與想像。 
        p 班雅明認為：「歷史不只是一種科學，它同時也是一種再回憶的形式 ….再回憶可以把未完成的事物（如幸福），轉化為完成。亦可把苦難，轉化為未完成。」
        p 聽故事的過程中，我們發現最精彩的素材就是「人」。因此低度干預，希望讓說故事的人盡情發揮，如田園詩般的童年回憶，或是老後的幽默懷想，堪稱是人類經驗中的藝術。相對的，有些青澀未完成的故事，具有某些無名特質，也是我們所珍惜的，在多元複雜的社會裡，這種交集的現象，學者稱之為「日常生活的現實」。
        p 最終，說故事的人，希望有聽故事的人陪伴。未來，希望能邀集大家共同參與，歡迎上傳你的時光＠臺中，與更多人在雲端分享自己的故事。
        p Special Thanks To_<br>
          | 莊    靈老師<br>
          | 謝春德老師<br>
          | 劉克襄老師<br>
          | 施奇廷老師<br>
          | 臺中市港區藝術中心<br>
          | TARITSI ARCHI打里摺<br>
          | 周大中婦產科診所<br>
          | 以及所有接受訪問分享時光@臺中的說故事的人<br>
          | 攝影協力_<br>
          | 洪少飛(共創體共創體有限公司)<br>
          | 莊凱宇(好隊影像有限公司)<br>
          | 汪紹綱(好隊影像有限公司)<br>
          | 陳苡端(隱形人『Stealth.M』)<br>
          | 後製剪接_<br>
          | 洪少飛(共創體共創體有限公司)<br>
          | 製作企劃_<br>
          | TDCC

</template>

<script>
    export default {
        data(){
          return {
            filter: "",
            tagfill: [
              {name: "覺味",status: false},
              {name: "漫遊",status: false},
              {name: "印象",status: false},
              {name: "未來",status: false}
            ],
            sel_id: null,
            vdata: [
  {
    "id": 1,
    "youtube": "https://youtu.be/E9--6btqoo8",
    "filename": "20170401 01 P1240317 Color",
    "content": "我每次吃到爌肉飯的時候都會想到臺中，因為在臺北的時候我們不會早上的時候去吃爌肉飯，也不會宵夜的時候去吃，反而是在臺中的時候，有時候早上去練球前我們就會去吃個爌肉飯再去練球，或者是晚上跟朋友玩太晚然後宵夜也是吃爌肉飯，所以每次我吃爌肉飯的時候就會想到臺中。",
    "participant_name": "周宏澤",
    "title": "一碗爌肉飯\n喚起對臺中的\n清晨與深宵的懷想",
    "info": "周宏澤/實習醫生/在臺中求學5年",
    "theme": "覺味",
    "tag": "爌肉飯,臺中宵夜",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 2,
    "youtube": "https://youtu.be/rA5U0iQEBsQ",
    "filename": "20170401 01 P1240319 Color",
    "content": "在臺中最有特色的活動我覺得是爵士音樂節，最近大概在幾個月前我跟著我的同學一起去，也有國外來的交換醫學生，我們一起去爵士音樂節那邊享受他的氣氛；在草地上喝點小酒，玩個桌遊，是我覺得最有趣的活動。",
    "participant_name": "周宏澤",
    "title": "節奏搖擺 小酌歡暢\n與國際友人同樂\n於臺中爵士音樂節",
    "info": "周宏澤/實習醫生/在臺中求學5年",
    "theme": "漫遊",
    "tag": "爵士音樂節,Taichung Jazz Festival",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 3,
    "youtube": "https://youtu.be/HvBcgCDqZMs",
    "filename": "20170401 01 P1240321 Color",
    "content": "我最喜歡跟朋友去的地方就是逢甲夜市，因為他那邊有很多吃的喝的，炸的那個番薯球，官芝霖的大腸包小腸，都是令人懷念；然後，那邊也很多買東西的地方，像是我們要買球鞋或球衣都會去那邊買，一般的流行服飾那邊也很多，所以我最喜歡去逢甲。",
    "participant_name": "周宏澤",
    "title": "潮流時尚 道地小食 \n歡喜流連逢甲夜市",
    "info": "周宏澤/實習醫生/在臺中求學5年",
    "theme": "漫遊",
    "tag": "逢甲夜市,番薯球,官之霖,大腸包小腸,買,購物,流行服飾",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 4,
    "youtube": "https://youtu.be/MYQelprm-YU",
    "filename": "20170401 01 P1240324 Color",
    "content": "到臺中是我第一次離開家裡去求學，那以前都是住在臺北這個城市裡。那去臺中，臺中對我來講是一個從來沒有去過的地方，難免會有一點緊張，但是到了臺中之後，我覺得他真的是一個很令人舒服的城市，那我也很喜歡那裡。",
    "participant_name": "周宏澤",
    "title": "舒適 愜意的城市\n平復負笈他鄉學子\n的不安心緒",
    "info": "周宏澤/實習醫生/在臺中求學5年",
    "theme": "印象",
    "tag": "離家求學,舒服",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 5,
    "youtube": "https://youtu.be/YKsGDZGDfGg",
    "filename": "20170401 01 P1240325 Color",
    "content": "我覺得臺中市是一個永遠都晴朗的城市，配合著合理的物價，我視為他是一個最適合人居住的地方。",
    "participant_name": "周宏澤",
    "title": "晴朗天氣+合理物價\n=宜居的臺中",
    "info": "周宏澤/實習醫生/在臺中求學5年",
    "theme": "印象",
    "tag": "永遠晴朗,合理物價,適合居住",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 6,
    "youtube": "https://youtu.be/Kz0ENmVG0PY",
    "filename": "20170401 01 P1240330 Color",
    "content": "如果我要帶我朋友去玩的話，我第一個會規劃的是高美濕地，我覺得他的夕陽景觀是全臺灣都沒有辦法擁有的，非常令人驚艷，我相信這個地方一定會讓他們留下深刻的印象",
    "participant_name": "周宏澤",
    "title": "獨一無二的夕陽景緻 \n高美濕地",
    "info": "周宏澤/實習醫生/在臺中求學5年",
    "theme": "漫遊",
    "tag": "高美濕地,夕陽",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 7,
    "youtube": "",
    "filename": "20170401-02-P1240334A-Color",
    "content": "",
    "participant_name": "周大中醫生",
    "title": "寒冬中初嚐大麵羹滋味\n溫暖賽後少年的疲憊身心",
    "info": "周大中/醫生/在臺中出生求學18年",
    "theme": "覺味",
    "tag": "大麵羹,光復國小",
    "auth": "CC BY 3.0",
    "livetime": "16-20年"
  },
  {
    "id": 8,
    "youtube": "",
    "filename": "20170401-02-P1240334B-Color",
    "content": "",
    "participant_name": "周大中醫生",
    "title": "灌進肉包中 \n紅紅的東泉辣醬 \n也灌注記憶中 \n滿滿的臺中美食體驗",
    "info": "周大中/醫生/在臺中出生求學18年",
    "theme": "覺味",
    "tag": "東泉辣椒醬",
    "auth": "CC BY 3.0",
    "livetime": "16-20年"
  },
  {
    "id": 9,
    "youtube": "https://youtu.be/P2u3BeYv5HQ",
    "filename": "20170401-02-P1240354-B-Color",
    "content": "阿水獅的豬腳便當了吧，我在二十五六歲的時候回臺中榮總作實習醫師，那個日子很苦，每兩到三天就要值一次班，也許就是在七十二小時之內，你可能就要上五六十小時的班的工作，那壓力非常的大；那每個星期五的晚上會有總醫師查房跟新藥或新的醫療產品的介紹，廠商就會固定的提供星期五晚上的誤餐便當，我們那個時候很小的醫生，當然覺得說吃一頓就很高興，總是期待今天晚上是拿到阿水獅的便當，那每每都能夠拿到，真的都是阿水獅的便當，就可以高興一兩個小時，所以現在有時候回臺中也會跑到臺中公園對面，阿水獅的店裡面去吃上一份。",
    "participant_name": "周大中醫生",
    "title": "實習醫師的小確幸\n唯有阿水師豬腳便當",
    "info": "周大中/醫生/在臺中出生求學18年",
    "theme": "覺味",
    "tag": "阿水獅,豬腳便當,榮總,臺中公園",
    "auth": "CC BY 3.0",
    "livetime": "16-20年"
  },
  {
    "id": 10,
    "youtube": "https://youtu.be/4IqQ-YVJZLw",
    "filename": "20170401 03 P1240364 Color",
    "content": "會讓我想到臺中的食物是炭烤香雞排，原因是因為在當時我進大學的時候，大部分的那種雞排都是用炸的，很少是有烤過的。所以，我們每年去谷關做研訓的時候\n，中途經過新社會看到有一攤就是這樣子的攤販，那我們路過的時候一定都會停下來買。",
    "participant_name": "葉兆擁(小葉)",
    "title": "谷關山訓必訪\n新社炭烤香雞排",
    "info": "小葉/登山嚮導/在臺中求學工作7年",
    "theme": "覺味",
    "tag": "谷關,新社,炭烤雞排",
    "auth": "CC BY 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 11,
    "youtube": "https://youtu.be/iYgHOus7CLY",
    "filename": "20170401-03-P1240365-Color",
    "content": "會讓我想到臺中的節慶是聖誕節，因為我念東海大學，那我們每年聖誕節的時候，東海大學都會有那個就是敲鐘；在那個時刻，通常我是不在東海大學的，因為我會去爬山，但是，有一年就是因為隊伍出不成，那一年我們就回到東海大學裡面過聖誕節，第一次看到整個校園的路上塞滿了人，那一次我印象很深刻。",
    "participant_name": "葉兆擁(小葉)",
    "title": "不期而遇的聖誕節 \n還有人頭湧湧的東海敲鐘",
    "info": "小葉/登山嚮導/在臺中求學工作7年",
    "theme": "漫遊",
    "tag": "東海大學,聖誕節,敲鐘",
    "auth": "CC BY 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 12,
    "youtube": "https://youtu.be/IQuvMwfStIo",
    "filename": "20170401-05-P1240402-Color",
    "content": "我要怎麼形容臺中這個城市，我會覺得他是一個，很悠閒值得慢慢散步遊玩的地方。",
    "participant_name": "張心影",
    "title": "賞味臺中\n悠閒漫步",
    "info": "張心影/自由業/在臺中求學5年",
    "theme": "印象",
    "tag": "形容臺中,悠閒",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 13,
    "youtube": "https://youtu.be/vh-ilci6Lrk",
    "filename": "20170401 05 P1240404 Color",
    "content": "我想對臺中說的話就是，希望臺中可以看到自己好的地方把它留下來，不要走得那麼快，走得慢一點，讓大家都可以細細品嘗那個比較細緻，比較特別的地方。",
    "participant_name": "張心影",
    "title": "自我探索細味緩行\n臺中你好!",
    "info": "張心影/自由業/在臺中求學5年",
    "theme": "未來",
    "tag": "想對臺中說的話",
    "auth": "CC BY 3.0",
    "livetime": "0-5年"
  },
  {
    "id": 14,
    "youtube": "https://youtu.be/1aVBlKhQBtQ",
    "filename": "20170411 03 P1240457 Color",
    "content": "大里的公共資訊圖書館，因為那邊很大，而且有很多書；我是跟我的爸爸媽媽還有我妹一起去的，都看一些小說，看很多書就覺得很開心。",
    "participant_name": "施盺辰",
    "title": "全家人的知識寶庫\n大里國立公共資訊圖書館",
    "info": "施同學/國中生/在臺中求學8年",
    "theme": "漫遊",
    "tag": "大里,國立公共資訊圖書館",
    "auth": "CC BY-NC-ND 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 15,
    "youtube": "https://youtu.be/8GGuMZtDeeQ",
    "filename": "20170411 03 P1240458 Color",
    "content": "應該是前年的爵士音樂節，那一次就有看到很多吹薩克斯風很厲害的人，感覺就是很放鬆很舒服",
    "participant_name": "施盺辰",
    "title": "薩克斯風高手雲集\n盡在爵士音樂節",
    "info": "施同學/國中生/在臺中求學8年",
    "theme": "漫遊",
    "tag": "爵士音樂節,薩克斯風",
    "auth": "CC BY-NC-ND 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 16,
    "youtube": "https://youtu.be/AkDnFM1FMIs",
    "filename": "20170411 03 P1240459 Color",
    "content": "臺中有很多地方可以玩，如果是我的話我應該會推薦就是去科博館、國美館還有到東海散步。如果去科博館或國美館，有很多展覽可以看，也有很多可以玩的地方。",
    "participant_name": "施盺辰",
    "title": "臺中文藝之旅\n小小導遊引路推薦",
    "info": "施同學/國中生/在臺中求學8年",
    "theme": "漫遊",
    "tag": "科博館,國美館,東海大學",
    "auth": "CC BY-NC-ND 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 17,
    "youtube": "https://youtu.be/2GnICpDHxP4",
    "filename": "20170411 05 P1240493 Color",
    "content": "我覺得臺北跟臺中有很還蠻大的差距，因為臺北那裡車子很多，臺中只有假日的時候車子會很多；我覺得墾丁那裡海邊很多，然後臺中卻只有一個",
    "participant_name": "施盺言",
    "title": "唯有假日才有的熙攘車流\n是童稚的眼光中\n海邊山色稍遜墾丁的臺中景象",
    "info": "施同學/小學生/在臺中求學7年",
    "theme": "印象",
    "tag": "臺中,海邊,車子",
    "auth": "CC BY-NC-ND 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 18,
    "youtube": "https://youtu.be/df07vi_xi0Q",
    "filename": "20170419 13 0001702 Color",
    "content": "我印象怎麼講我到現在一直還不會忘記的就是，一個賣稀飯的，他到現在還有在賣，我吃他的稀飯，鹹稀飯，臺語講人都叫鹹粥，我大概幼稚園中班開始吃；到現在我上禮拜才去吃，他就在光復路的47巷，我們以前就是講小巷子，那現在的年輕人講那邊是青草街，以前我們沒有叫青草街，青草街是後來這十年來，前任市長然後到現在這樣子，然後把那條街叫青草街，以前我們就叫小巷子。\n那個攤子非常，老臺中幾乎都知道，尤其住市區的，他就是泡飯，很簡單的泡飯，裡面加一點蔥酥、蒜酥，然後一些碎的一些蔥末，吃起來有點像泡飯，他不是稀飯。搭配一些炸的燒肉 、花枝、豆腐、魚都是用炸的，然後他的那個辣椒醬、醬料全部都是自己做的。\n從我小的時候到現在，一直都沒有變，很奇怪，以前是他爸爸賣，現在是他兒子賣，我已經吃了五十幾年，真的是，臺中市他來講的話，跟剛剛我同學講的臺中肉圓，他跟臺中肉圓還有一個臺中肉羹，這三樣應該是歷史最悠久的，應該沒有比他們更悠久的。",
    "participant_name": "孫敬儒",
    "title": "五十年不變的好味道\n老臺中人的巷弄美食\n小巷子鹹稀飯",
    "info": "孫敬儒/服務業/在臺中出生至今50餘年",
    "theme": "覺味",
    "tag": "鹹稀飯,小巷子,青草街,臺中肉圓,臺中肉羹",
    "auth": "CC BY 3.0",
    "livetime": "20年以上"
  },
  {
    "id": 19,
    "youtube": "https://youtu.be/dL_RXMZ8BV4",
    "filename": "20170419 16 0000503 Color",
    "content": "臺中有一個很特別的東西，就是早餐是炒麵，然後，炒麵就是一定要加辣椒醬，而且那種辣椒醬是跟其它縣市都不一樣。他是就是是甜辣醬那種的，因為早餐店，臺中的早餐店都很多都會賣蛋餅然後兼賣炒麵，賣那些的同時，他一定會附一罐就是甜辣醬，可是我到臺南如果真的可以吃到炒麵的話，那個炒麵通常不是黃麵，通常是意麵或是白麵之類，而且他的辣一定就不是甜辣醬，他都是那種辣油之類的，所以我覺得這個東西是臺中還算蠻特別的東西。",
    "participant_name": "吳霈瑀",
    "title": "難以取代的家鄉味\n臺中早餐炒麵拌甜辣醬\n離鄉遊子的鄉愁",
    "info": "吳霈瑀/藝文工作者/在臺中求學工作9年",
    "theme": "覺味",
    "tag": "炒麵,甜辣醬",
    "auth": "CC BY 3.0",
    "livetime": "6-10年"
  },
  {
    "id": 20,
    "youtube": "https://youtu.be/9D-84xigbSw",
    "filename": "20170420 19 0003402 Color",
    "content": "大麵羹!就是我來臺中就很訝異，因為我們住在那個植物園附近，之前那時候植物園還沒有開發，它的周遭外圍就是有一攤大麵羹，就用那個辦桌的那種大圓桌，每天下午四點多就全部都是人，然後我就很訝異，那時候剛來臺中沒多久 那到底是什麼? 原來是大麵羹 ，然後很好奇就去吃了之後我發現就是那個類似米苔目的那種羹類，可是我不是很愛它的味道，可是幾乎你只要有朋友或同學是在地的臺中人，他們就會非常非常的愛吃，所以我對它印象很深刻。",
    "participant_name": "張雪鳳",
    "title": "植物園外大麵羹攤\n午後四時 食客紛至沓來\n遠嫁新婦初次嚐鮮\n滋味難明",
    "info": "張雪鳳/創作者/在臺中結婚生子10餘年",
    "theme": "覺味",
    "tag": "大麵羹,植物園",
    "auth": "CC BY-NC-ND 3.0",
    "livetime": "16-20年"
  },
  {
    "id": 21,
    "youtube": "https://youtu.be/z7ytSz58Hmc",
    "filename": "20170420 23 0002004 Color",
    "content": "他們就會有時候從我們言談當中他們就會說，欸? 你是中部人，你是哪裡人這樣子，他們就從言談之中，他們就有辦法去判斷 。可能是腔調，我覺得說話的方式，到北部他們第一個就覺得你一定不是他們北部的人， 因為可能語言上面，欸?這中間你們會講閩南話或怎麼樣。",
    "participant_name": "楊雅玲",
    "title": "耳濡目染成指標\n臺中閩南腔",
    "info": "楊雅玲/創作者/在臺中工作結婚生子約15年",
    "theme": "印象",
    "tag": "臺中腔,閩南語",
    "auth": "CC BY-NC-ND 3.0",
    "livetime": "11-15年"
  }
]
          };
        },
        mounted() {
            console.log('Navbar mounted.')
        },
        methods: {
          bg_css(url){
            return {"background-image":"url("+url+")"}
          },
          embed(url){
            return "<iframe width=\"100%\" height=\"450\" src=\"https://www.youtube.com/embed/"+url.split('/').slice(-1)+"?autoplay=1&rel=0\" frameborder=\"0\" allowfullscreen></iframe>";
          },
          related_set(v){
            if (!v) return []; 
            function randomSort(a, b) { return Math.random() > 0.5 ? -1 : 1; }
            return {
              ...this.vdata.filter((a)=>{
              return (a.theme==v.theme || a.participant_name==v.participant_name) && (this.sel_id!=a.id)
            }).sort(randomSort).slice(0,3)
            };
          }
        },
        computed: {
          filtered_data(){
            var vobj=this;
            return this.vdata.filter((a)=>(((a.content+a.info+a.tag+a.theme).indexOf(vobj.filter)!=-1)||vobj.filter==""));
          },
          selected_video(){
            if (this.sel_id)
              return this.vdata.filter((a)=>(a.id==this.sel_id))[0];
            else
              return null
          }
        }
    }
</script>
