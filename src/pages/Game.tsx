import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameLoopRef = useRef<number>();

  const BOX_SIZE = 20;
  const CANVAS_SIZE = 400;
  const GRID_SIZE = CANVAS_SIZE / BOX_SIZE;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let snake = [{ x: 10, y: 10 }];
    let direction = { x: 0, y: 0 };
    let food = generateFood();
    let speed = 100;
    let lastTime = 0;

    function generateFood() {
      let newFood;
      do {
        newFood = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        };
      } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y));
      return newFood;
    }

    function draw() {
      if (!ctx || !canvas) return;

      // Clear canvas
      ctx.fillStyle = "#22c55e";
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

      // Draw snake
      ctx.fillStyle = "#000000";
      snake.forEach((segment) => {
        ctx.fillRect(segment.x * BOX_SIZE, segment.y * BOX_SIZE, BOX_SIZE - 2, BOX_SIZE - 2);
      });

      // Draw food
      ctx.fillStyle = "#ef4444";
      ctx.fillRect(food.x * BOX_SIZE, food.y * BOX_SIZE, BOX_SIZE - 2, BOX_SIZE - 2);
    }

    function update() {
      if (direction.x === 0 && direction.y === 0) return;

      const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return;
      }

      // Check self collision
      if (snake.some((segment) => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return;
      }

      snake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore((s) => s + 10);
        food = generateFood();
      } else {
        snake.pop();
      }
    }

    function gameLoop(currentTime: number) {
      if (gameOver) return;

      const deltaTime = currentTime - lastTime;

      if (deltaTime > speed) {
        lastTime = currentTime;
        update();
        draw();
      }

      gameLoopRef.current = requestAnimationFrame(gameLoop);
    }

    function handleKeyPress(e: KeyboardEvent) {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) direction = { x: 0, y: -1 };
          break;
        case "ArrowDown":
          if (direction.y === 0) direction = { x: 0, y: 1 };
          break;
        case "ArrowLeft":
          if (direction.x === 0) direction = { x: -1, y: 0 };
          break;
        case "ArrowRight":
          if (direction.x === 0) direction = { x: 1, y: 0 };
          break;
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameOver]);

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="mb-8">
        <a href="/">
          <Button variant="outline" className="glass-card border-primary/50 hover:bg-primary/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück
          </Button>
        </a>
      </div>

      <div className="glass-card rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 gradient-text">Snake Game</h1>
        <div className="mb-4 text-xl">Score: {score}</div>

        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          className="border-4 border-primary rounded-lg mx-auto mb-4"
        />

        {gameOver && (
          <div className="mb-4">
            <p className="text-2xl font-bold text-destructive mb-4">Game Over!</p>
            <Button onClick={resetGame} className="bg-gradient-primary hover:opacity-90">
              Neu Starten
            </Button>
          </div>
        )}

        <p className="text-muted-foreground text-sm">
          Benutze die Pfeiltasten zum Steuern
        </p>
      </div>
    </main>
  );
};

export default Game;
