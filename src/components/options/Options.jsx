/* eslint-disable react/prop-types */
export default function Options({ updateFeedback, totalFeedback, resetFeedback }) {
  return (
    <div>
      <button
        onClick={() => updateFeedback("good")}
        className=" bg-slate-300 px-3 mx-1 hover:bg-slate-200 ml-4 rounded-md"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className=" bg-slate-300 px-3 mx-1 hover:bg-slate-200 rounded-md"
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback("bad")}
        className=" bg-slate-300 px-3 mx-1 hover:bg-slate-200 rounded-md"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className=" bg-slate-300 px-3 mx-1 hover:bg-slate-200 rounded-md"
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
}