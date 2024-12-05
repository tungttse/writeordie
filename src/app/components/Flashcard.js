import { motion } from 'framer-motion';

const Flashcard = ({ front, back }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      onClick={() => setFlipped(!flipped)}
      className="w-64 h-40"
      animate={{ rotateY: flipped ? 180 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {flipped ? back : front}
    </motion.div>
  );
};