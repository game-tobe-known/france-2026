# Contributing

*Version française plus bas.*

## About this game, and a request to you

I am not French. I am not a professional game developer either.
Following the news, I rebuilt France in October 2026 as a single square.

But I cannot do this alone. I may have missed facts, or left out someone's voice.
Above all, if you live there, or you were there, telling me "this is wrong" or "this is missing" is the greatest help.

### Copy this game

Games can now be copied effortlessly by AI. Many creators are startled by it,
and some have lost sight of why they should make games at all. I do not have the answer yet either.

But for this game, I think it works the other way around.
**Please, copy it with your AI.**

Move it to your city. Translate it into your language. Add the voices that are missing, or draw it again, more beautifully.
Each copy brings it a little closer to how the world really is, and carries it a little further. That is what it was made for.

If people who meet the facts through a game close it and start, with their own hands, to make the real world a little better,
and if even one such moment is born, it does not matter who made it.

### Two requests

**1. Keep sources on facts, and keep the "fictional" mark on fictional people.**
Without that, this game stops depicting the world and starts distorting it.

**2. Add your line to the makers.**
[makers.js](makers.js) lists everyone who has carried this game on. Do not delete anything; add your version at the end:
your name, the date, what you changed, where your version can be played and where its code lives.
From your version, anyone can then trace back through every version to the first one.
And when someone copies yours one day, your name will stay there too.

### Passing it on

Improving this repository directly, or making something new where you are: both are welcome.
I hope someone will carry this on.

---

## Practical guide

Issues and pull requests are welcome in any language.

### Run it

No build step. Serve the folder and open it in a browser:

```
python -m http.server 8765
```

Then open http://127.0.0.1:8765/

| File | What it is |
|---|---|
| `index.html` | The game: a 3D Place de la République where you choose the time you arrive (three.js from a CDN) |
| `data.js` | Facts, voices, timeline and sources, in English. To change the content, start here |
| `data.<lang>.js` | Translations (fr, es, de, ja, zh, ko, ar) in the same order as `data.js`. If you add an item to `data.js`, add it to every language |
| `makers.js` | Everyone who has carried the game on. Append only |

When you change any `data*.js` or `makers.js`, bump the `?v=` on the `data.js` and `makers.js` script tags in `index.html`
(the language files follow it). Otherwise a browser can mix a cached old file with the new page.

### Rules for content

These rules are what make the game trustworthy. Changes that break them will not be merged.

- **Every fact has a source.** Add the source to `sources` and reference its key in `src`. Check that the source really says it.
- **Voices are labelled.** `kind: 'quoted'` is something a real person said in the press and must have a source; quote it faithfully.
  `kind: 'composite'` is a fictional person built from reporting. Never present a composite as a real person, and never describe one so precisely that it points to someone real.
- **Numbers name who published them.** For example, Interior Ministry 550,000 / CGT 800,000. Do not pick one.
- **No faces, no skin colour.** Figures are silhouettes so that no one's background can be read from their appearance.
- **No photos or video from the press.** Take facts from reporting, not images.
- **Show more than one side.** The goal is to let players stop and think, not to tell them what to think.

### Good first contributions

- Check a translation in a language you read natively
- Find a better or primary source for a fact
- Report something that is wrong, missing, or one-sided
- Play on your phone and report what breaks

### Bigger ideas

- Other places and moments of the same movement (other cities, other days)
- Voices from people who were there
- Better sound, lighting, and crowds that run well on phones

Open an issue first for big changes so we can talk about it.

### License

By contributing, you agree that your code is released under the MIT License ([LICENSE](LICENSE))
and your written content under CC BY-SA 4.0 ([LICENSE-CONTENT.md](LICENSE-CONTENT.md)).

---

# Contribuer (en français)

## À propos de ce jeu, et ce que je vous demande

Je ne suis pas français. Je ne suis pas non plus un créateur de jeux professionnel.
En suivant l'actualité, j'ai reconstitué la France d'octobre 2026 sur une seule place.

Mais je ne peux pas y arriver seul. J'ai peut-être manqué des faits, ou oublié la voix de quelqu'un.
Surtout, si vous vivez là-bas, ou si vous y étiez, me dire « ceci est faux » ou « ceci manque » est l'aide la plus précieuse.

### Copiez ce jeu

Aujourd'hui, l'IA permet de copier un jeu sans effort. Beaucoup de créateurs en sont stupéfaits,
et certains ne savent plus pourquoi ils devraient encore créer. Je n'ai pas encore la réponse, moi non plus.

Mais pour ce jeu-ci, je crois que c'est l'inverse.
**S'il vous plaît, copiez-le avec votre IA.**

Transposez-le dans votre ville. Traduisez-le dans votre langue. Ajoutez les voix qui manquent, ou redessinez-le, plus beau.
Chaque copie le rapproche un peu de ce qu'est vraiment le monde, et le porte un peu plus loin. C'est pour cela qu'il a été fait.

Si des personnes qui découvrent des faits à travers un jeu le referment et commencent, de leurs propres mains,
à rendre le monde réel un peu meilleur, et si un seul de ces moments naît, peu importe qui l'a fait.

### Deux demandes

**1. Gardez les sources des faits, et la mention « fictif » des personnages fictifs.**
Sans cela, ce jeu cesse de montrer le monde et commence à le déformer.

**2. Ajoutez votre ligne aux auteurs.**
[makers.js](makers.js) liste toutes celles et ceux qui ont repris ce jeu. Ne supprimez rien ; ajoutez votre version à la fin :
votre nom, la date, ce que vous avez changé, où l'on peut jouer à votre version et où se trouve son code.
Depuis votre version, chacun pourra remonter toutes les versions jusqu'à la première.
Et le jour où quelqu'un copiera la vôtre, votre nom y restera aussi.

### Transmettre

Améliorer directement ce dépôt, ou créer quelque chose de nouveau là où vous êtes : les deux sont les bienvenus.
J'espère que quelqu'un reprendra le flambeau.

Les issues et pull requests sont bienvenues dans toutes les langues. Les règles pratiques sont décrites plus haut (en anglais).
