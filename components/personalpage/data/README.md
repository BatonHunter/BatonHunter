# Personal Profile

## 簡介

統一存放各頁面會用到的玩家相關資訊，像是E-mail、MBTI測驗結果、行動點數等資訊。

各component存取資訊時，只要使用profile_data.js，profile_data.js是所有component和後端Data的界面，隔離了後端資料的變化。

底層目前採用cookie統一存放，另外也會將相關的資料儲存到後端server(如果有必要的話)。

## 使用方式

### 1st Example : personal_mobile.html

第一個例子是關於怎麼讀取 Profile 中的資訊。

參考 components/personalpage/personal_mobile.html

(1) 在 HTML 中引用 cookie.js 和 profile_data.js (請注意順序)
```html
<!-- components/personalpage/personal_mobile.html -->
<script src="../../assets/js/cookie.js"></script>
<script src="data/profile_data.js"></script>
```

(2) 在 javascript 中使用 Profile 提供的 public functions
```javascript
// components/personalpage/personal_mobile.html
var profile_fbid = Profile.getfbID();
var profile_name = Profile.getName();
var profile_strength = Profile.getStrength();
```

### 2nd Example : mbtiquestion.html

第二個例子是關於如何寫入。

(1) 在 HTML 中引用 cookie.js 和 profile_data.js (請注意順序)
```html
<!-- mbtiquestion.html -->
<script src="assets/js/cookie.js"></script>
<script src="components/personalpage/data/profile_data.js"></script>
```

(2) 在 javascript 中使用 Profile 提供的 public functions
```javascript
// components/mbtiquestion/mbti_questionloader/mbti_questionloader.js
Profile.setMBTI(result.character, result.strength, result.category);
```