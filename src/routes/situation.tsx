import { createFileRoute } from "@tanstack/react-router";
import { ScenarioActivity, type ScenarioQ } from "@/components/ScenarioActivity";

export const Route = createFileRoute("/situation")({
  component: SituationPage,
});

const QUESTIONS: ScenarioQ[] = [
  {
    situation: "비가 와요.",
    illustration: "🌧️",
    question: "무엇을 가져갈까요?",
    options: [
      { label: "우산", icon: "☂️" },
      { label: "공", icon: "⚽" },
    ],
    correctIndex: 0,
    correctMsg: "잘했어요! 비가 오면 우산이 필요해요.",
    retryMsg: "다시 생각해 볼까요? 비가 오면 몸이 젖을 수 있어요.",
  },
  {
    situation: "연필이 없어요.",
    illustration: "😯",
    question: "무엇이 필요할까요?",
    options: [
      { label: "연필", icon: "✏️" },
      { label: "신발", icon: "👟" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 글씨를 쓰려면 연필이 필요해요.",
    retryMsg: "다시 해볼까요? 글씨를 쓸 때 필요한 것을 찾아봐요.",
  },
  {
    situation: "목이 말라요.",
    illustration: "😵",
    question: "무엇이 필요할까요?",
    options: [
      { label: "물", icon: "💧" },
      { label: "모자", icon: "🧢" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 목이 마르면 물을 마셔요.",
    retryMsg: "다시 생각해 볼까요? 목이 마를 때 마시는 것을 찾아봐요.",
  },
  {
    situation: "손이 더러워요.",
    illustration: "🙌",
    question: "무엇을 해야 할까요?",
    options: [
      { label: "비누로 손 씻기", icon: "🧼" },
      { label: "장난감 가지고 놀기", icon: "🧸" },
    ],
    correctIndex: 0,
    correctMsg: "잘했어요! 손이 더러우면 깨끗하게 씻어요.",
    retryMsg: "다시 생각해 볼까요? 손을 깨끗하게 하려면 무엇을 해야 할까요?",
  },
  {
    situation: "넘어져서 다쳤어요.",
    illustration: "🤕",
    question: "무엇을 해야 할까요?",
    options: [
      { label: "약 바르기", icon: "💊" },
      { label: "게임하기", icon: "🎮" },
    ],
    correctIndex: 0,
    correctMsg: "맞아요! 다쳤을 때는 치료를 받아요.",
    retryMsg: "다시 해볼까요? 다쳤을 때 필요한 것을 찾아봐요.",
  },
];

function SituationPage() {
  return <ScenarioActivity title="상황 해결하기" questions={QUESTIONS} prevTo="/activities" />;
}
