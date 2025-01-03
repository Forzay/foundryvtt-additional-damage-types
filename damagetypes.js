Hooks.once('setup', () => {

console.log('P5e | Initializing');
  
CONFIG.DND5E.damageTypes['Edemic'] = 'P5EEXTRA.DamageEdemic';
CONFIG.DND5E.damageTypes['True Dark'] = 'P5EEXTRA.DamageTDark';
CONFIG.DND5E.damageTypes['Cursed'] = 'P5EEXTRA.DamageCursed';
CONFIG.DND5E.damageTypes['Holy'] = 'P5EEXTRA.DamageHoly';
CONFIG.DND5E.damageTypes['Deep'] = 'P5EEXTRA.DamageDeep';
CONFIG.DND5E.damageTypes['Deconstructive'] = 'P5EEXTRA.DamageDeconstructive';
CONFIG.DND5E.damageTypes['Lordly'] = 'P5EEXTRA.DamageLordly';
CONFIG.DND5E.damageTypes['Imitative'] = 'P5EEXTRA.DamageImitative';

CONFIG.DND5E.hitDieTypes.push('d20');

CONFIG.DND5E.conditionTypes['Dissociatiaded'] = "P5EEXTRA.ConDiss";
CONFIG.DND5E.conditionTypes['Fragmented'] = "P5EEXTRA.ConFrag";
CONFIG.DND5E.conditionTypes['Lorded'] = "P5EEXTRA.ConLord";
CONFIG.DND5E.conditionTypes['Cursed'] = "P5EEXTRA.ConCursed";
CONFIG.DND5E.conditionTypes['Edemised'] = "P5EEXTRA.ConEdem";
CONFIG.DND5E.conditionTypes['Presence'] = "P5EEXTRA.ConPresence";

});
