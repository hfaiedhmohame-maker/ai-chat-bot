# 🤖 AI Chatbot - Komplett Kostenlos!

Ein professioneller AI-Chatbot mit **unbegrenzten Nachrichten** - 100% kostenlos!

## ✅ Was du bekommst:

- ✨ Modernes Chat-Interface
- 🚀 Schnelle AI-Antworten (Groq API)
- 💬 Unbegrenzte Nachrichten
- 📱 Funktioniert auf allen Geräten
- 🎨 Einfach anzupassen
- 🔧 Widget zum Einbetten auf Kunden-Websites

## 📁 Dateien in diesem Projekt:

```
chatbot-project/
├── index.html          # Hauptseite mit Chatbot
├── widget.html         # Embed-Code für Kunden
├── api/
│   └── chat.js        # Backend (verbindet mit Groq AI)
├── vercel.json        # Vercel Konfiguration
├── package.json       # Projekt-Info
└── README.md          # Diese Datei
```

## 🚀 ANLEITUNG: Auf Vercel hochladen

### Schritt 1: Projekt hochladen

**Option A: Mit GitHub (empfohlen)**
1. Gehe auf github.com
2. Erstelle ein neues Repository (+ oben rechts → "New repository")
3. Lade alle Dateien aus diesem Ordner hoch
4. Gehe zu vercel.com
5. Klicke "Add New..." → "Project"
6. Wähle dein GitHub Repository
7. Klicke "Deploy"

**Option B: Direkt hochladen**
1. Gehe zu vercel.com
2. Klicke "Add New..." → "Project"  
3. Klicke auf "Browse" oder ziehe den kompletten Ordner rein
4. Klicke "Deploy"

### Schritt 2: API-Schlüssel einfügen ⚠️ WICHTIG!

Nach dem Upload:

1. Gehe zu deinem Projekt auf Vercel
2. Klicke auf "Settings" (oben)
3. Klicke auf "Environment Variables" (links)
4. Klicke "Add New"
5. Gib ein:
   - **Name:** `GROQ_API_KEY`
   - **Value:** `gsk_...` (dein Groq API-Schlüssel)
   - **Environment:** Alle auswählen (Production, Preview, Development)
6. Klicke "Save"
7. **WICHTIG:** Gehe zurück zu "Deployments" und klicke bei dem neuesten Deployment auf die 3 Punkte (...) → "Redeploy"

### Schritt 3: Testen!

1. Öffne die URL die Vercel dir gibt (z.B. `https://dein-projekt.vercel.app`)
2. Teste den Chatbot
3. Schreibe ein paar Nachrichten

## 🎨 Chatbot anpassen / trainieren

Öffne die Datei `api/chat.js` und ändere den `systemPrompt`:

```javascript
const systemPrompt = `Du bist ein freundlicher Kundenservice-Assistent für [FIRMENNAME].

Firmeninformationen:
- Öffnungszeiten: Mo-Fr 9-18 Uhr
- Telefon: 0123-456789
- Email: info@firma.de
- Produkte: [Liste deine Produkte]

Beantworte Fragen zu:
- Produkten und Preisen
- Öffnungszeiten
- Lieferung und Versand
- Rückgabe und Reklamation`;
```

Nach jeder Änderung:
1. Speichern
2. Auf GitHub pushen (oder neu hochladen)
3. Vercel deployed automatisch

## 💻 Widget auf Kunden-Website einbetten

1. Öffne `widget.html` in einem Browser
2. Ersetze `DEINE-VERCEL-URL.vercel.app` mit deiner echten Vercel URL
3. Kopiere den Code
4. Füge ihn auf der Kunden-Website VOR dem `</body>` Tag ein

Der Chat-Button erscheint dann unten rechts! 💬

## 🎯 Für Kunden verkaufen

**Preisvorschlag:**
- Einrichtung: 200-500€ einmalig
- Wartung: 50-100€ monatlich
- Anpassungen: 50€/Stunde

**Was du anbietest:**
1. Installation auf ihrer Website
2. Training mit ihren Firmendaten
3. Design-Anpassung (Farben, Logo)
4. Monatliche Updates und Support

## 🔧 Häufige Probleme

**Chatbot antwortet nicht?**
→ Prüfe ob der API-Schlüssel in den Vercel Environment Variables ist
→ Mache ein "Redeploy" nach dem Hinzufügen

**"API-Schlüssel nicht konfiguriert"?**
→ Du hast den GROQ_API_KEY nicht in Vercel Environment Variables eingegeben

**Widget funktioniert nicht?**
→ Hast du die URL im Widget-Code geändert?

## 📞 Support

Bei Fragen:
1. Prüfe diese README
2. Schau in die Browser-Konsole (F12) für Fehler
3. Prüfe die Vercel Logs

## 📝 Lizenz

MIT - Du kannst es kommerziell nutzen und verkaufen!

---

**Viel Erfolg beim Verkaufen! 🚀**
