import Vue from 'vue';

//=======================================
// Vue.jsの特徴
//=======================================

// 1. ドキュメントが日本語で整理されていて見やすい
// 2. React.jsよりも高速
// 3. 双方向データバインディングで、書くコードが少なくなる
// 4. 細かなアニメーションにも対応

// vueの基本的な書き方
new Vue({ // vueインスタンスの生成
    el: '#app1',
    data: { // dataの中にプロパティを定義することで指定したスコープ範囲の中で使用することができる
        message: 'vueのテンプレート構文。{{}}で囲うことで処理が書ける。'
    }
});

// v-bindを使った属性のバインド
// v-bindは:を使って省略できる
new Vue({
    el: '#app2',
    data: {
        time: 'このページをロードしたのは' + new Date().toLocaleString(),
        classObject: {
            'active': true,
            'text-danger': true,
        }
    }
});

new Vue({
    el: '#app3',
    data: {
        isShow: true
    }
});

// v-forを使用することでループ
new Vue({
    el: '#app4',
    data: {
        todos: [
            {text: 'v-forを使うと'},
            {text: 'dataやhtmlをループして'},
            {text: '生成できる'}
        ]
    }
});

// v-onを使うことでユーザーからのイベントを発火させる
// v-onは@にて省略が可能

new Vue({
    el: '#app5',
    data: {
        message: 'Hello Vue.js'
    },
    methods: {
        changeMessage: function () {
            this.message = this.message + ' chaaaaaange!!'
        }
    }
    // jQueryのように、書き換え先のDOMを取得→値を取得→DOMを書き換えるという手順を踏む必要がなくなる
});

// v-modelで双方向のデータバインディング

new Vue({
    el: '#app6',
    data: {
        message: 'これが双方向のデータバインディング'
        // 入力された内容が自動でデータへ更新される。さらにデータが更新されると、出力内容も自動で変わる
    }
});

// v-if v-else-if v-else で条件分岐が使用できる

new Vue({
    el: '#app7',
    data: {
        isShow: 'a'
    }
});

new Vue({
    el: '#app8',
    data: {
        isShow: true
    }
});

// 算出プロパティ「computed」を使用。dataの変更を監視して、自動で実行される
// 常に結果がキャッシュされていて、dataが変更されていない限り同じ結果が返され続ける
// methodsは自分で毎回実行するたびに再計算される

new Vue({
    el: '#app9',
    data: {
        isShow: true
    },
    computed: {
        showString: function () {
            return (this.isShow) ? Date.now() : 'isShowはfalseです'
        },

        showString2: function () {
            return Date.now()
        }
    },

    methods: {
        showStringMethod: function () {
            return (this.isShow) ? Date.now() : 'isShowはfalseです'
        },

        showStringMethod2: function () {
            return Date.now()
        }
    }

});

// v-htmlでサニタイズを無効化
new Vue({
    el: '#app10',
    data: {
        script: '<p style="color: red;">メッセージとして表示されます</p>'
    }
});

// transitonとanimation
new Vue({
    el: '#app11',
    data: {
        show: true
    }
});

// コンポーネントの使用方法
Vue.component('button-counter', {
    // component内でのdataは必ず関数にする。通常のオブジェクト形式では、全componentでdataが共有されてしまう。
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">あたたたたたたたた！(コンボ数：{{count}})　終わった〜！！</button>'
});
new Vue({el: '#app12'});

// propsの使い方
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{title}}</h3>'
});
new Vue({el: '#app13'});

Vue.component('blog-post', {
    props: ['post'],
    template: `
   <div class="blog-post">
      <h3>{{post.title}}</h3>
      <button v-on:click="$emit('enlarge-text')">
       Enlarge Text
      </button>
      <div v-html="post.content"></div>
   </div>
   `
});
new Vue({
    el: '#app14',
    data: {
        posts: [
            {
                id: 1,
                title: 'sample post 1',
                content: '<p>サンプル投稿のコンテント</p>'
            },
            {
                id: 2,
                title: 'sample post 2',
                content: '<p>サンプル投稿のコンテント</p>'
            },
            {
                id: 3,
                title: 'sample post 3',
                content: '<p>サンプル投稿のコンテント</p>'
            }
        ],
        postFontSize: 1
    },
    methods: {
        fontSizeScale() {
            this.postFontSize += 0.1;
        }
    }
});