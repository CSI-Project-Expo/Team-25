/*
 * This function will later call OpenAI api
 * For now, it returns a mock match score.
 */
const getAIMatchResult = async (
  missingDescription,
  sightingDescription
) => {
  // TEMP LOGIC (mock)
  // Replace this with GPT API later next week
  let score = "low";
  let reason = "Descriptions do not closely match";

  const missingWords = missingDescription.toLowerCase();
  const sightingWords = sightingDescription.toLowerCase();

  if (
    missingWords.includes("blue") &&
    sightingWords.includes("blue")
  ) {
    score = "high";
    reason = "Clothing color closely matches description";
  }

  return {
    matchScore: score,
    reason,
  };
};

module.exports = {
  getAIMatchResult,
};
