-- Atualiza o campo 'image' na tabela 'projects' para um projeto específico
-- Substitua [SEU_PROJECT_ID] pelo ID do projeto e [SEU_PROJECT_NAME] pelo nome do projeto
UPDATE public.projects
SET image = '/images/suzano-logo.png' -- Caminho atualizado
WHERE id = [SEU_PROJECT_ID] OR name = '[SEU_PROJECT_NAME]';
