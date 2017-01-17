const choiceTitle = (choice, upcase) => {
  const func = String.prototype[upcase ? 'toUpperCase' : 'toLowerCase'];
  const header = choice.header || choice.name;

  if (header.match(/^[A-Z]{2,}\b/)) {
    return header;
  }

  return `${func.apply(header.charAt(0))}${header.substr(1)}`;
};

const mapTranslationsToChoice = (choice, intl) => {
  const translated = { ...choice };

  translated.name = choice.name || intl.formatMessage({
    id: `choices.${choice.key}.name`
  });

  translated.description = choice.description || intl.formatMessage({
    id: `choices.${choice.key}.description`
  });

  translated.header = choice.header || intl.formatMessage({
    id: `choices.${choice.key}.header`,
    defaultMessage: translated.name
  });

  return translated;
};

/**
 * Takes an array of choices and creates a single question which may be
 * presented to the visitor. Returns null if there are insufficient choices to
 * create a new question.
 *
 * @param  {array}  choices An array of choices.
 * @param  {object} intl    Intl instance, with translations.
 * @return {object}         A question.
 */
export default (choices, intl) => {
  if (choices.length < 2) {
    return null;
  }

  const first = mapTranslationsToChoice(choices[0], intl);
  const second = mapTranslationsToChoice(choices[1], intl);

  return {
    name: `${intl.formatMessage({ id: 'game.title' }, {
      firstChoice: choiceTitle(first, true),
      secondChoice: choiceTitle(second, false)
    })}?`,
    choices: [
      { ...first, isCorrect: first.delta <= second.delta },
      { ...second, isCorrect: first.delta >= second.delta }
    ]
  };
};
