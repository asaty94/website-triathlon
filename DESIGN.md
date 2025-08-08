# Ishigaki Tri Team — Repository Structure & DESIGN.md

> **目的**: GitHub Pages 上で運用する LP（単一ページ）を、GitHub Copilot で継続的に更新しやすくするための設計書。

---

## 0. 前提

* **静的サイト**（ビルドなし／Vanilla HTML+CSS+JS）
* ドメインは GitHub Pages 既定の URL を使用（独自ドメインは任意）
* X（Twitter）へのリンク／固定ポスト運用を前提

---

## 1. フォルダ構成（推奨）

```
website-triathlon
├─ index.html                    # LP本体（単一ページ）
├─ DESIGN.md                     # この設計書
├─ assets/
│  ├─ css/
│  　├─ styke.css
│  ├─ js/
│  　├─ main.js
│  ├─ img/
├─ data/
   ├─events.json
```

---

## 2. コンテンツモデル（index.html 内のID）

* `#about` : コミュニティの趣旨／対象／期間
* `#events` : 「毎月案募集→投票→実施」の流れ + イベント例
* `#join` : 参加条件／オンライン運営（LINE OC）
* `#entry` : 
* `#faq` : よくある質問
* `#contact` : X のDM or メール

---

## 3. Copilot での編集方針

* **小さな差分**でコミット（1 トピック 1 コミット）
* Copilot へのプロンプト例：

---

## 4. `events.json` を使う場合（任意）

**目的**: 月例イベントの差し替えを HTML ではなく JSON で行う。

`data/events.json`

[
  {
    "month": "2025-09",
    "title": "キックオフ会（軽くラン＆カフェ）",
    "place": "大阪城公園",
    "status": "proposal"
  },
  {
    "month": "2025-10",
    "title": "ブリック練（バイク→ラン）@淀川",
    "place": "淀川右岸",
    "status": "fixed"
  }
]

---

## 5. アクセシビリティ指針

* alt 属性を必ず設定（ロゴ等の飾りは `alt=""` も可）
* 見出しレベルを段階的に（`h1 → h2 → h3`）
* コントラスト比は WCAG AA 目安
* キーボード操作主体でもナビゲーション可能