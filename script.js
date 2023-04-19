// ==UserScript==
// @name         Overleaf Editor Custom VIM Keybindings
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://www.overleaf.com/project/*
// @grant        none
// @description  try to take over the world!
// @author       You
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener("UNSTABLE_editor:extensions", (event) => {
    const { CodeMirror, CodeMirrorVim, extensions } = event.detail;

    // add custom keybindings - insert mode applies on insert
    CodeMirrorVim.Vim.map("jk", "<Esc>", "insert");
    // normal mode applies while escaped
    CodeMirrorVim.Vim.noremap("j", "h", "normal");
    CodeMirrorVim.Vim.noremap("k", "j", "normal");
    CodeMirrorVim.Vim.noremap("l", "k", "normal");
    CodeMirrorVim.Vim.noremap("æ", "l", "normal");
    CodeMirrorVim.Vim.noremap("j", "h", "visual");
    CodeMirrorVim.Vim.noremap("k", "j", "visual");
    CodeMirrorVim.Vim.noremap("l", "k", "visual");
    CodeMirrorVim.Vim.noremap("æ", "l", "visual");
    });
})();
