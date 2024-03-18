<?php

namespace ContainerXb6o1i8;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class getAssociationConfiguratorService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private 'EasyCorp\Bundle\EasyAdminBundle\Field\Configurator\AssociationConfigurator' shared service.
     *
     * @return \EasyCorp\Bundle\EasyAdminBundle\Field\Configurator\AssociationConfigurator
     */
    public static function do($container, $lazyLoad = true)
    {
        include_once \dirname(__DIR__, 4).'/vendor/easycorp/easyadmin-bundle/src/Contracts/Field/FieldConfiguratorInterface.php';
        include_once \dirname(__DIR__, 4).'/vendor/easycorp/easyadmin-bundle/src/Field/Configurator/AssociationConfigurator.php';

        $a = ($container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Factory\\EntityFactory'] ?? self::getEntityFactoryService($container));

        if (isset($container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Field\\Configurator\\AssociationConfigurator'])) {
            return $container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Field\\Configurator\\AssociationConfigurator'];
        }

        return $container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Field\\Configurator\\AssociationConfigurator'] = new \EasyCorp\Bundle\EasyAdminBundle\Field\Configurator\AssociationConfigurator($a, (isset($container->factories['service_container']['EasyCorp\\Bundle\\EasyAdminBundle\\Router\\AdminUrlGenerator']) ? $container->factories['service_container']['EasyCorp\\Bundle\\EasyAdminBundle\\Router\\AdminUrlGenerator']($container) : self::getAdminUrlGeneratorService($container)), ($container->services['request_stack'] ??= new \Symfony\Component\HttpFoundation\RequestStack()), ($container->privates['EasyCorp\\Bundle\\EasyAdminBundle\\Factory\\ControllerFactory'] ?? self::getControllerFactoryService($container)));
    }
}
