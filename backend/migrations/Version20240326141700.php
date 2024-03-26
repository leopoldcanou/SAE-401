<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240326141700 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE movie ADD description LONGTEXT NOT NULL, ADD duration VARCHAR(10) NOT NULL, ADD year VARCHAR(4) NOT NULL, ADD rating VARCHAR(10) NOT NULL, ADD age VARCHAR(10) NOT NULL, ADD img VARCHAR(512) NOT NULL, ADD wideimg VARCHAR(512) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE movie DROP description, DROP duration, DROP year, DROP rating, DROP age, DROP img, DROP wideimg');
    }
}
