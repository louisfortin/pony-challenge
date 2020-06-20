
import articles from '../data/articles.json';
import whiskeys from '../data/whiskies.json';

// mock data
// fake it's fetched from regular back-end

export const fetchWhiskeys = () => new Promise((resolve) => {
	setTimeout(() => resolve([ ...whiskeys ]), 300)
});

export const fetchWhiskey = id => new Promise((resolve) => {
	setTimeout(() => resolve(whiskeys.find((w => w.title === id))), 300)
});

export const fetchArticles = () => new Promise((resolve) => {
	setTimeout(() => resolve([...articles]), 300)
});
