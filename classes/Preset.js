class Preset {
    constructor(presetId, toneOfVoice, language) {
        this.presetId = presetId;
        this.toneOfVoice = toneOfVoice;
        this.language = language;
    }

    // Рефакторинг №1: Усунення прихованих побічних ефектів через повернення нового об'єкта
    applyToContent(content) {
        return {
            ...content,
            bodyText: content.bodyText + `\n\n[Мова: ${this.language}, Tone: ${this.toneOfVoice}]`
        };
    }
} 

module.exports = Preset;