<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240401171629 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE featured ADD movie_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE featured ADD CONSTRAINT FK_3C1359D48F93B6FC FOREIGN KEY (movie_id) REFERENCES movie (id)');
        $this->addSql('CREATE INDEX IDX_3C1359D48F93B6FC ON featured (movie_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE featured DROP FOREIGN KEY FK_3C1359D48F93B6FC');
        $this->addSql('DROP INDEX IDX_3C1359D48F93B6FC ON featured');
        $this->addSql('ALTER TABLE featured DROP movie_id');
    }
}
