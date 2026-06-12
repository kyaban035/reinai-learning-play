import { createFileRoute } from "@tanstack/react-router";
import { ScenarioActivity, type ScenarioQ } from "@/components/ScenarioActivity";

export const Route = createFileRoute("/predict")({
  component: PredictPage,
});

const QUESTIONS: ScenarioQ[] = [
  {
    situation: "사탕을 많이 먹었어요.",
    illustration: "🍬🍬🍬",
    question: "어떻게 될까요?",
    options: [
      { label: "치과에서 치료 받는다", icon: "🦷" },
      { label: "수영장에서 수영을 한다", icon: "🏊" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 사탕을 많이 먹으면 이가 아플 수 있어요.",
    retryMsg: "다시 생각해 볼까요? 사탕을 많이 먹으면 어디가 아플까요?",
  },
  {
    situation: "손을 씻지 않고 밥을 먹었어요.",
    illustration: "🍚🙌",
    question: "어떻게 될까요?",
    options: [
      { label: "배가 아플 수 있어요", icon: "🤢" },
      { label: "비행기를 타요", icon: "✈️" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 손을 씻지 않으면 배가 아플 수 있어요.",
    retryMsg: "다시 생각해 볼까요? 밥 먹기 전에는 무엇을 해야 할까요?",
  },
  {
    situation: "밤에 늦게 잤어요.",
    illustration: "🌙😴",
    question: "어떻게 될까요?",
    options: [
      { label: "아침에 피곤해요", icon: "🥱" },
      { label: "새 신발을 사요", icon: "👟" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 늦게 자면 다음 날 피곤할 수 있어요.",
    retryMsg: "다시 생각해 볼까요? 잠을 늦게 자면 몸이 어떨까요?",
  },
  {
    situation: "장난감을 정리하지 않았어요.",
    illustration: "🧸🚗🎲",
    question: "어떻게 될까요?",
    options: [
      { label: "밟고 넘어질 수 있어요", icon: "🤕" },
      { label: "수영을 해요", icon: "🏊" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 정리하지 않으면 넘어질 수 있어요.",
    retryMsg: "다시 해볼까요? 바닥에 물건이 있으면 어떻게 될까요?",
  },
  {
    situation: "친구를 밀었어요.",
    illustration: "🙅👫",
    question: "어떻게 될까요?",
    options: [
      { label: "친구가 아파요", icon: "😢" },
      { label: "케이크를 먹어요", icon: "🍰" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 친구를 밀면 친구가 아플 수 있어요.",
    retryMsg: "다시 생각해 볼까요? 밀면 친구가 어떻게 느낄까요?",
  },
];

function PredictPage() {
  return <ScenarioActivity title="어떻게 될까요?" questions={QUESTIONS} prevTo="/activities" />;
}
