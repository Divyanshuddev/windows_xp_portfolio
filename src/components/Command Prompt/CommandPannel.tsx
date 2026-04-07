import { Stack, Typography, TextField } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
const CommandPannel = () => {
  const currentHeight = useSelector((state: RootState) => state.windowresize.height)
  const currentWeight = useSelector((state: RootState) => state.windowresize.width)
  const styles = {
    root: {
      backgroundColor: "black",
      width: currentWeight - 35,
      height: currentHeight < 800 ? 437 : 880,
      padding: 1,
      fontFamily: "JetBrains Mono",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
    text: {
      color: "white",
      fontFamily: "JetBrains Mono",
      fontSize: 18,
    },
    input: {
      input: {
        color: "white",
        fontFamily: "JetBrains Mono",
      },
    },
  };
  const [history, setHistory] = useState<string[]>([
    "DivyanshuXP v3.0",
    "Inspired by Windows XP",
    "",
    "",
    "",
    "Type 'help' for a list of commands.",
    "Press ENTER/RETURN to execute commands.",
    "",
    "",
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, [history]);
  const handleCommand = (cmd: string) => {
    const command = cmd.trim().toLowerCase();
    let output = "";
    switch (command) {
      case "date":
        output = new Date().toLocaleDateString();
        break;

      case "time":
        output = new Date().toLocaleTimeString();
        break;

      case "whoami":
        output = "divyanshu";
        break;

      case "help":
        output = "Available commands: date, time, whoami, exit, cls";
        break;

      case "cls":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        output = "Session terminated.";
        break;

      default:
        output = `'${command}' is not recognized as an internal or external command.`;
    }
    setHistory((prev) => [
      ...prev,
      `C:\\> ${cmd}`,
      output,
    ]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };
  return (
    <Stack sx={styles.root} spacing={0.5}>

      {history.map((line, index) => (
        <Typography key={index} sx={styles.text}>
          {line}
        </Typography>
      ))}
      <Stack direction="row" alignItems="center">
        <Typography sx={styles.text}>C:\&gt;&nbsp;</Typography>

        <TextField
          variant="standard"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          sx={styles.input}
          fullWidth
          autoFocus
          InputProps={{ disableUnderline: true }}
        />
      </Stack>
      <div ref={bottomRef} />
    </Stack>
  );
};
export default CommandPannel;