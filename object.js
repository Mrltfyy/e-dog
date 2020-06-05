let dog = {
  // 属性
  name: '麻花',
  age: 13,
  isMale: true,

  // 是否存活
  isLive: true,

  // 为宠物添加饱食度，这个属性
  food: 100,
  
  // 健康度
  health: 100,
  // 生存计时器
  liveTimer: null,

  // 方法 bark
  bark: function () {
    if (!this.isLiving()) return;
     view.displayYell('wang!Wang!');
  },



  // 方法 tellName 用于告诉别人自己的名字
  tellName: function() {
    if (!this.isLiving()) return;
     view.displayYell('my name is ' + this.name);
    return this.name;
  },

  // 利用内部的方法，来修改宠物的名字
  setName: function(newName) {
    if (!this.isLiving()) return;
     this.name = newName;
  },

  isLiving: function () {
    if (this.isLive) {
      return true;
    } else {
       view.displayYell(this.name + '一动不动，已经去了天堂');
      return false;
    }
  },

  // 让宠物可以跑起来
  run: function() {
    // 跑起来之前，先判断是否存活，
    if (this.isLive) {
      // 如果饱食度低于20，宠物拒绝跑动
      if (this.food <= 20 ) {
         view.displayYell('主人！' + this.name + '饿了！');
      } else {
         view.displayYell( this.name + '在草地上撒欢跑步');
        // this.food = this.food - 10;
        this.food -= 10;
      }
    } else {
       view.displayYell('一动不动，已经去了天堂');
    }

  },

  feed: function () {
    if (this.isLive) {
      this.food = 100;
      view.displayYell(this.name + '吃饱了，对你很满意');
    }
  },

  live: function() {
    let self = this;
    this.liveTimer = setInterval(function () {
      self.food--;
      self.checkFood();
      self.checkHealth();
    }, 300);
  },

  checkFood: function (){
    if (this.food <= 0) {
      this.food = 0;
      this.health -= 5;
      view.displayYell('Wang!Wang!Wang!饿了饿了')
    } else if (this.food >= 80) {
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    }
  },

  checkHealth: function () {
    //  view.displayYell(this.health);
    this.health = this.health >= 100 ? 100 : this.health;
    if (this.health <= 0 ) {
      this.dead();
    };
  },

  dead: function () {
    view.displayYell("aoWooooooo....");
    clearInterval(this.liveTimer);
    this.isLive = false;
  },

  // 该方法用于告诉别人，宠物目前的状态 
  tellStatus () {
    return '饱食度: [' + this.food + '], 健康值: [' + this.health + '], 是否存活: [' + (this.isLive ? '活的' : '挂了') + ']';
  },

  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.food = 100;
      this.live();
      view.displayYell('为你而战，我的主人');
    } else {
      view.displayYell('说啥呢，老子活蹦乱跳');
    }
  },


};

let babyDog = {
  name: '花花',
  age: 1,   
  isMale: true,

  // 是否存活
  isLive: true,

  // 为宠物添加饱食度，这个属性
  food: 100,
  
  // 健康度
  health: 100,
  // 生存计时器
  liveTimer: null,


  
  tellName: function() {
    if (!this.isLiving()) return;
     view.displayBabyYell('my name is ' + this.name);
    return this.name;
  },

  // 利用内部的方法，来修改宠物的名字
  setName: function(newName) {
    if (!this.isLiving()) return;
     this.name = newName;
  },

  isLiving: function () {
    if (this.isLive) {
      return true;
    } else {
       view.displayBabyYell(this.name + '一动不动，已经去了天堂');
      return false;
    }
  },

  // 让宠物可以跑起来
  run: function() {
    // 跑起来之前，先判断是否存活，
    if (this.isLive) {
      // 如果饱食度低于20，宠物拒绝跑动
      if (this.food <= 20 ) {
         view.displayBabyYell('主人！' + this.name + '饿了！');
      } else {
         view.displayBabyYell( this.name + '在草地上撒欢跑步');
        // this.food = this.food - 10;
        this.food -= 10;
      }
    } else {
       view.displayBabyYell('一动不动，已经去了天堂');
    }

  },

  feed: function () {
    if (this.isLive) {
      this.food = 100;
      view.displayBabyYell(this.name + '吃饱了，对你很满意');
    }
  },

  live: function() {
    let self = this;
    this.liveTimer = setInterval(function () {
      self.food--;
      self.checkFood();
      self.checkHealth();
    }, 300);
  },

  checkFood: function (){
    if (this.food <= 0) {
      this.food = 0;
      this.health -= 5;
      view.displayBabyYell('Wang!Wang!Wang!饿了饿了')
    } else if (this.food >= 80) {
      this.food = this.food >= 100 ? 100 : this.food;
      this.health += 5;
    }
  },

  checkHealth: function () {
    //  view.displayYell(this.health);
    this.health = this.health >= 100 ? 100 : this.health;
    if (this.health <= 0 ) {
      this.dead();
    };
  },

  dead: function () {
    view.displayBabyYell("aoWooooooo....");
    clearInterval(this.liveTimer);
    this.isLive = false;
  },

  // 该方法用于告诉别人，宠物目前的状态 
  tellStatus () {
    return '饱食度: [' + this.food + '], 健康值: [' + this.health + '], 是否存活: [' + (this.isLive ? '活的' : '挂了') + ']';
  },

  resurrect: function () {
    if (!this.isLive) {
      this.isLive = true;
      this.health = 100;
      this.food = 100;
      this.live();
      view.displayBabyYell('为你而战，我的主人');
    } else {
      view.displayBabyYell('说啥呢，老子活蹦乱跳');
    }
  },

  acquisition:function(){
    if(!this.islive){
      this.isLive = true;
      this.health = 100;
      this.food = 100;
      this.live();
      let babyDogDiv = document.getElementById('babyDogPic');
      babyDogDiv.style.display = "block";
      let babyDogYell = document.getElementById('babyDogYell');
      babyDogYell.style.display = "block";
    }
  },




};







let view = {
  displayDog: function () {
    // 将页面中id为dogPic的页面元素，选取，并把它存到dogDiv变量中
    let dogDiv = document.getElementById('dogPic');
    // 为dogDiv 设置新的属性
    dogDiv.setAttribute("class", "dog");
  },
  displayBabyDog:function(){
    let babyDogDiv = document.getElementById('babyDog');
   // babyDogDiv.setAttribute("class","babyDog")
  },

  displayStatus: function () {
    setInterval(function () {
      let dogStatus = document.getElementById("status");
      dogStatus.innerHTML = dog.tellStatus();
    }, 100);
  },


  // displayStatus: function(){
  //   let status = document.getElementById('status');
  //   status.style.height = "100px";
  //   setInterval(function (){
  //     status.style.height = "50px";
  //   }, 100)
  //   },


  displayBabyStatus: function () {
    setInterval(function () {
      let babyDogStatus = document.getElementById("babyStatus");
      babyDogStatus.innerHTML = babyDog.tellStatus();
    }, 100);
  },

  // displayBabyStatus: function(){
  // let statusBaby = document.getElementById('babyStatus');
  // statusBaby.style.height = "100px";
  // setInterval(function (){
  //   statusBaby.style.height = "50px";
  // }, 1000)
  // },

  displayYell: function (str) {
    let dogYell = document.getElementById('yell');
    dogYell.innerHTML = str;
  },


  displayBabyYell: function (str) {
    let dogBabyYell = document.getElementById('babyDogYell');
    dogBabyYell.innerHTML = str;
  },
  


};

view.displayDog();
view.displayStatus();
view.displayYell('我是一只快乐的土狗');
dog.live();


view.displayBabyDog();
view.displayBabyStatus();
view.displayBabyYell('我是一只快乐的小狗')
babyDog.live();



// 调用属性
// 对象，应该具有封装性
// dog.name 这样直接调用的方法虽然可行，但不符合规律，不建议使用
//  view.displayYell(dog.name);
// 调用方法

// dog.bark();
// dog.run();
// dog.run();
// dog.run();
// dog.run();

// dog.run();





