<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">

    <!-- meta -->
    <title> 【質．感】臺中紀事</title>
    <meta property="og:title" content="【質．感】臺中紀事" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />
    <meta property="og:description" content=" 「質 感」展覽實驗計畫，以「臺中」作為「研究與創作」的起點，邀集一批藝術家、影像創作者、資料管理員、程式設計師、導演、編輯和研究人員等一起，進行各種不同性質的創作、討論、交流與實作。希望能在藝術家、程式設計師與觀賞者之間，創造一些有趣或有意義的新互動。亦或者，未來可進行更多對於數位文化的探討、反思與再詮釋。 " />

        
    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <audio src="/music/memories-of-a-dream.ogg" autoplay loop id="bgmusic"></audio>
    <div id="app">   
        <Navbar></Navbar>
        <Nav_full></Nav_full>
        
        <transition name="fade" mode="out-in">
            <router-view :key="$route.path"></router-view>
        </transition>  

        @yield('content')
        <div class="tern">DigitalCulture.tw 製作 | 除另有註明，網站之內容皆採用 創用CC 姓名標示-相同方式分享 3.0 臺灣 授權條款</div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
