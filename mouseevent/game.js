var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var humanContainer = new render.DisplayObjectContainer();
var human = new render.DisplayObjectContainer;
human.x = -50;
human.y = -65;
var head = new render.Bitmap();
head.x = 20;
head.y = 0;
head.z = 80;
head.h = 70;
var trunk = new render.Bitmap();
trunk.x = 25;
trunk.y = 40;
var left_leg = new render.Bitmap();
var right_leg = new render.Bitmap();
var left_arm = new render.Bitmap();
var right_arm = new render.Bitmap();
left_leg.x = 20;
left_leg.y = 100;
left_leg.z = 20;
left_leg.h = 50;
right_leg.x = 55;
right_leg.y = 100;
right_leg.z = 20;
right_leg.h = 51;
left_arm.x = 8;
left_arm.y = 50;
right_arm.x = 60;
right_arm.y = 50;
//head.source = "wander-icon.jpg";
//humanContainer.addChild(head)
head.source = "head.png";
trunk.source = "trunk.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";
humanContainer.addChild(human); //添加子节点
human.addChild(head);
human.addChild(left_leg);
human.addChild(right_leg);
human.addChild(left_arm);
human.addChild(right_arm);
human.addChild(trunk);
var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png"]);
renderCore.start(humanContainer, ["trunk.png"]);
renderCore.start(humanContainer, ["left_arm.png"]);
renderCore.start(humanContainer, ["right_arm.png"]);
renderCore.start(humanContainer, ["left_leg.png"]);
renderCore.start(humanContainer, ["right_leg.png"]);
var HumanBody = (function (_super) {
    __extends(HumanBody, _super);
    function HumanBody() {
        _super.apply(this, arguments);
        this.vx = 5;
        this.r = Math.PI;
        this.orientation = 1;
    }
    HumanBody.prototype.onTicker = function (duringTime) {
        this.x = this.x + this.vx * duringTime; //+= duringTime * this.vx;
        this.rotation = this.rotation + this.r * duringTime;
    };
    return HumanBody;
}(Body));
var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 5;
body.y = 200;
ticker.start([body]);
var eventCore = new events.EventCore();
eventCore.init();
var HeadClicked = false;
var LegClicked = false;
var headHitTest = function (localPoint, displayObject) {
    //alert (`点击位置为${localPoint.x},${localPoint.y}`);
    if (localPoint.x > 0 && localPoint.x <= displayObject.z && localPoint.y > 0 && localPoint.y <= displayObject.h) {
        console.log('头');
        HeadClicked = true;
    }
    return HeadClicked;
};
var left_legHitTest = function (localPoint, displayObject) {
    // alert (`点击位置为${localPoint.x},${localPoint.y}`);  
    // console.log(localPoint);
    if (localPoint.x > 0 && localPoint.x <= displayObject.z && localPoint.y > 0 && localPoint.y < displayObject.h) {
        LegClicked = true;
    }
    return LegClicked;
};
var right_legHitTest = function (localPoint, displayObject) {
    if (localPoint.x > 0 && localPoint.x <= displayObject.z && localPoint.y > 0 && localPoint.y < displayObject.h) {
        LegClicked = true;
    }
    return LegClicked;
};
var headOnClick = function () {
    //alert("clicked!!");
    //修改 HumanBody 的速度，使其反向移动
    console.log(body.orientation);
    if (HeadClicked) {
        if (body.vx == 0) {
            body.vx = 5 * body.orientation;
            body.r = Math.PI * body.orientation;
            HeadClicked = false;
        }
        else {
            body.vx *= -1;
            body.r *= -1;
            body.orientation *= -1;
            console.log('normal' + body.orientation);
            HeadClicked = false;
        }
    }
};
var LegOnClick = function () {
    if (LegClicked) {
        body.vx = 0;
        body.r = 0;
        body.rotation = 0;
        LegClicked = false;
    }
};
eventCore.register(head, headHitTest, headOnClick);
eventCore.register(left_leg, left_legHitTest, LegOnClick);
eventCore.register(right_leg, right_legHitTest, LegOnClick);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxJQUFJLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQ3pELElBQUksS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLHNCQUFzQixDQUFDO0FBQzlDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDZCxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBRWQsSUFBSSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDWixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ1osSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFFWixJQUFJLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNiLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQ2IsSUFBSSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDbkMsSUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDcEMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDaEIsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDakIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7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