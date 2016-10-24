import { github } from './components/components';

(async () => {
  console.log('Connecting to github...');

  const result = await github();

  console.log(`Total commits to sky pages: ${result.length}`);
})();
