useEffect(() => {
    if (isIdle) {
      const audio = new Audio('/buzzer.mp3');
      audio.play();
    }
  }, [isIdle]);
  