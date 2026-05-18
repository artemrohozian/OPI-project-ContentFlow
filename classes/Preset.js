class Preset {
    constructor(presetId, toneOfVoice, language) {
        this.presetId = presetId;
        this.toneOfVoice = toneOfVoice;
        this.language = language;
    }

    // Додаємо налаштування мови та тону до тексту
    applyToContent(content) {
        content.bodyText +=
            `\n\n[Мова: ${this.language}, Tone: ${this.toneOfVoice}]`;
    }
}
module.exports = Preset;