# Generated by Django 3.2.6 on 2021-08-23 12:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='_id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
