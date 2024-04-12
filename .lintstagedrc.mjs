import { ESLint } from 'eslint';

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file);
    })
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.map((file) => `"${file}"`).join(' ');
};

const eslintCommand = async (files) => {
  const filesToLint = await removeIgnoredFiles(files);
  return [`eslint --fix --max-warnings 0 ${filesToLint}`];
};
export default {
  '*': 'prettier -luw',
  '*.ts': eslintCommand,
  '*.css': 'stylelint --fix --mw 0',
};
