import { AcGameObject } from "./AcGameObject";
import { Cell } from './Cell'

export class Snake extends AcGameObject {
    constructor(info, gamemap) {
        super();

        this.id = info.id;
        this.color = info.color;
        this.gamemap = gamemap;

        this.cells = [new Cell(info.r, info.c)]; // 存放蛇的身体，初始放一个小格子,cells[0]放蛇头
        this.next_cell = null;

        this.speed = 5; //  每秒走5个格子
        this.direction = -1; // -1表示没有指令，0 1 2 3表示 上下左右
        this.status = "idle"; // idle表示静止，move表示正在移动，die表示死亡

        this.dr = [-1, 0, 1, 0];
        this.dc = [0, 1, 0, -1];

        this.step = 0; // 当前回合数
    }

    start() {

    }

    update() {
        this.update_move(); 
        this.render();
    }

    render(){
        const L = this.gamemap.L;
        const ctx = this.gamemap.ctx;

        ctx.fillStyle = this.color;
        for (const cell of this.cells) {
            ctx.beginPath();
            ctx.arc(cell.x * L, cell.y*L, L/2, 0, Math.PI *2);
            ctx.fill();
        }
    }

    update_move() {
        this.cells[0].y -= this.speed * this.timedelta / 1000;
    }

    // 判断两条蛇是否都准备好下一回合
    check_ready() {
        for (const snake of this.snakes) {
            if (snake.status !== "idle") return false;
            if (snake.direction === -1) return false;
        }
        return true;
    }

    // 将蛇的状态改变为走下一步
    next_step() {
        const d = this.direction;
        this.next_cell = new Cell(this.cells[0].r + this.dr[d], this.cells[0].c + this.dc[d]);
        this.direction = -1; // 清空操作
        this.status = "move";
        this.step++;
    }


}